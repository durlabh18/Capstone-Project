package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "ProductName")
    private String ProductName;

    @Column(name = "ProductDescription")
    private String ProductDescription;

    @Column(name = "ProductPrice")
    private double ProductPrice;

    @Column(name = "imageUrl")
    private String imageUrl;
}
