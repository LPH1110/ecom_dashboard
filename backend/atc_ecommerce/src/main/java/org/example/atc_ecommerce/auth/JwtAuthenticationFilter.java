package org.example.atc_ecommerce.auth;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.example.atc_ecommerce.repository.UserRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


@RequiredArgsConstructor
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtServices jwtServices;

    private final UserDetailsService userDetailsService;

    private final UserRepository userRepository;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
             String authHeader = request.getHeader("Authorization");
             String jwtToken;
             String username;
            if(authHeader==null||!authHeader.startsWith("Bearer "))
            {
                filterChain.doFilter(request,response);
                return;
            }
            jwtToken = authHeader.substring(7);
            username = jwtServices.extractUsername(jwtToken);
            if(username != null && SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails user = userDetailsService.loadUserByUsername(username);
                if(jwtServices.validateToken(jwtToken)) {
                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                            user,
                            null,
                            user.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            }
            filterChain.doFilter(request,response);
    }
}
