package org.example.atc_ecommerce.repository;

import org.example.atc_ecommerce.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolesRepository extends JpaRepository<Role,Integer> {

    Optional<Role> findRoleByName(String name);

}
