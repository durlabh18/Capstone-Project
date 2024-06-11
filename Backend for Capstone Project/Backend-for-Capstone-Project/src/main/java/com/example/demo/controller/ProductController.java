package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        Product newProduct=productRepository.save(product);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> listOfProducts=new ArrayList<>();
        productRepository.findAll().forEach(product -> listOfProducts.add(product));
        return new ResponseEntity<>(listOfProducts,HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id){
        Product product=productRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Invalid Product Id" + id));
        return ResponseEntity.ok(product);
    }

    @GetMapping("/by-name/{name}")
    public ResponseEntity<List<Product>> serarchProductsByName(@PathVariable("name") String name){
        List<Product> products = productRepository.searchByName(name);
        if (products.isEmpty()){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.ok(products);
        }
    }
}
