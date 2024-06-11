package com.example.demo.exception;

public class LoginFailureException extends Exception{
    public LoginFailureException(String message){
        super(message);
    }
}
