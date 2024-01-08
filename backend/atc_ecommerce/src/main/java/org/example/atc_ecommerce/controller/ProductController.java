package org.example.atc_ecommerce.controller;


import lombok.AllArgsConstructor;
import org.example.atc_ecommerce.dto.ProductDTO;
import org.example.atc_ecommerce.mapper.ProductDTOMapper;
import org.example.atc_ecommerce.model.Product;
import org.example.atc_ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@AllArgsConstructor
public class ProductController {

    private final ProductService productService;

    private final ProductDTOMapper productDTOMapper;

    @GetMapping("products")
    List<ProductDTO> findAll(){
        return productService.findAll().stream()
                .map(productDTOMapper)
                .toList();
    }

    @PostMapping("products")
    Product addNew(@RequestBody Product newProduct){
        return productService.addNew(newProduct);
    }
}
