package org.example.atc_ecommerce.mapper;

import lombok.AllArgsConstructor;
import org.example.atc_ecommerce.dto.ProductDTO;
import org.example.atc_ecommerce.model.Category;
import org.example.atc_ecommerce.model.Price;
import org.example.atc_ecommerce.model.Product;
import org.example.atc_ecommerce.repository.PriceRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductDTOMapper implements Function<Product, ProductDTO> {

    private final PriceRepository priceRepository;

    @Override
    public ProductDTO apply(Product product) {
        Price price = priceRepository.findLatestPriceByDate(product.getId(), Date.from(Instant.now()));
        List<String> categories = product.getListCategory().stream()
                .map(Category::getCategoryName)
                .toList();

        return ProductDTO.builder()
                .id(product.getId())
                .productName(product.getProductName())
                .description(product.getDescription())
                .createDate(product.getCreateDate())
                .img(product.getImg())
                .stock(product.getStock())
                .price(price.getPrice())
                .categories(categories)
                .build();
    }
}
