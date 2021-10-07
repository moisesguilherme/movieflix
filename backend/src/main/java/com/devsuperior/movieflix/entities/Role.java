package com.devsuperior.movieflix.entities;

import java.io.Serializable;

public class Role implements Serializable{
		
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String authority;
	
	public Role(){
		
	}
	
	public Role(Long id, String authority) {
		this.id = id;
		this.authority = authority;
	}
	
	
	
}
