package com.example.demo.controller;

import com.example.demo.exception.LoginFailureException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        System.out.println("Username:" + user.getUsername());
        System.out.println("Email:" + user.getEmail());
        System.out.println("Password:" + user.getPassword());
        User createdUser=userRepository.save(user);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> listOfUser=new ArrayList<>();
        userRepository.findAll().forEach(user -> listOfUser.add(user));
        return new ResponseEntity<>(listOfUser, HttpStatus.OK) ;
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getUserbyId(@PathVariable("id") Long id) throws UserNotFoundException{
        User user = userRepository.findById(id).orElseThrow(()->new UserNotFoundException("Not Found"));
        return ResponseEntity.ok(user);
    }

    @PostMapping("/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) throws UserNotFoundException, LoginFailureException {
        User user = userRepository.searchByUsername(username);
        if(user==null){
            return new ResponseEntity(username + "User not found", HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(user);
    }
}
