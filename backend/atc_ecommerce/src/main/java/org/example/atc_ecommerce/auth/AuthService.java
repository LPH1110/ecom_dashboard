package org.example.atc_ecommerce.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import org.example.atc_ecommerce.model.Role;
import org.example.atc_ecommerce.model.User;
import org.example.atc_ecommerce.repository.RolesRepository;
import org.example.atc_ecommerce.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthService {

    private final JwtServices jwtServices;
    private final UserRepository userRepository;
    private final UserDetailsService service;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final RolesRepository rolesRepository;
    public AuthResponse register(RegisterRequest request){
        String raw_password = request.getPassword();
        User user = User.builder()
                .username(request.getUsername())
                .phone(request.getPhone())
                .email(request.getEmail())
                .address(request.getAddress())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .build();

//        Set<Role> roleDefault = new HashSet<>();
//        Role userRole = rolesRepository.findRoleByName("customer").get();
//        roleDefault.add(userRole);
//        user.setRoles(roleDefault);


        User savedUser = userRepository.save(user);
        return new AuthResponse(jwtServices.generateToken(user));
    }


    public AuthResponse login(LoginRequest request){
        Authentication authToken = new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword());
        authenticationManager.authenticate(authToken);
        UserDetails student = service.loadUserByUsername(request.getUsername());
        return new AuthResponse(jwtServices.generateToken(student));
    }



}
