package org.example.atc_ecommerce.service;

import lombok.AllArgsConstructor;
import org.example.atc_ecommerce.dto.ProductDTO;
import org.example.atc_ecommerce.mapper.ProductDTOMapper;
import org.example.atc_ecommerce.model.Product;
import org.example.atc_ecommerce.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService{
    private final ProductRepository repository;
    private final ProductDTOMapper productDTOMapper;
    @Override
    public List<Product> findAll() {
        return repository.findAll();
    }


    @Override
    public Product addNew(Product newProduct) {
        Product saveProduct = Product.builder()
                .productName(newProduct.getProductName())
                .stock(newProduct.getStock())
                .description(newProduct.getDescription())
                .createDate(Date.from(Instant.now()))
                .build();
        return repository.save(saveProduct);
    }
}
