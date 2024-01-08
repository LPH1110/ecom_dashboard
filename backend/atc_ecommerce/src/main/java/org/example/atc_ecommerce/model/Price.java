package org.example.atc_ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.Date;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Table(name = "price")
@IdClass(PricePK.class)

public class Price {
    @Id
    private long product_id;

    public void setBookID(long product_id) {
        this.product_id = product_id;
    }

    @Column(name = "price", nullable = true)
    private Double price;

    public void setPrice(Double price) {
        this.price = price;
    }

    @Id
    @Column(name = "start_date")
    private Date startDate;

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Price(long product_id, Double price) {
        this.product_id = product_id;
        this.price = price;
        this.startDate = Date.from(Instant.now());
    }
}
