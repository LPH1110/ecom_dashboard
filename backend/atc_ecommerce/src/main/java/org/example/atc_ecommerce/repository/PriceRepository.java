package org.example.atc_ecommerce.repository;

import org.example.atc_ecommerce.model.Price;
import org.example.atc_ecommerce.model.PricePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;

public interface PriceRepository extends JpaRepository<Price, PricePK> {
    @Query(value = "SELECT * FROM price p " +
            "WHERE p.product_id = :product_id" +
            " AND p.start_date  <= :createDate ORDER BY p.start_date DESC limit 1",nativeQuery = true)
    Price findLatestPriceByDate(long product_id, Date createDate);

    @Query(value = "INSERT INTO price(product_id ,price)" +
            "VALUES(:product_id,:price)", nativeQuery = true)
    Price addNewPrice(Long product_id, Double price);
}
