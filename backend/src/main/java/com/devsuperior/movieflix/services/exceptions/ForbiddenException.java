package com.devsuperior.movieflix.services.exceptions;

public class ForbiddenException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	//403 - não tem permissão para o recurso
	public ForbiddenException(String msg) {
		super(msg);
	}	
}

