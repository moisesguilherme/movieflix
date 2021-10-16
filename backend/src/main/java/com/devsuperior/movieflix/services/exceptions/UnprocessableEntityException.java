package com.devsuperior.movieflix.services.exceptions;

public class UnprocessableEntityException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public UnprocessableEntityException(String msg) {
		super(msg);
	}	
}

