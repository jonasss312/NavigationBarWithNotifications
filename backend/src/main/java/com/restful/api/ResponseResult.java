package com.restful.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseResult {

    private static ResponseEntity buildResponse(HttpStatus status, Object object){
        return ResponseEntity
                .status(status)
                .body(object);
    }
    public static ResponseEntity Ok(Object object){
        return buildResponse(HttpStatus.OK, object);
    }

    public static ResponseEntity ServerErrorMessage(Exception ex) {
        return buildResponse(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage());
    }

    public static ResponseEntity NotFound(Object object) {
        return buildResponse(HttpStatus.NOT_FOUND, object);
    }

    public static ResponseEntity Created(Object object) {
        return buildResponse(HttpStatus.CREATED, object);
    }

    public static ResponseEntity BadRequest(Object object) {
        return buildResponse(HttpStatus.BAD_REQUEST, object);
    }

    public static ResponseEntity NoContent(Object object) {
        return buildResponse(HttpStatus.NO_CONTENT, object);
    }
}
