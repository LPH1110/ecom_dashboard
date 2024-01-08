package org.example.atc_ecommerce.service;

import org.example.atc_ecommerce.dto.ProductDTO;
import org.example.atc_ecommerce.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();


    Product addNew(Product newProduct);
}
