package com.devsuperior.movieflix.entities;

import java.io.Serializable;

public class Movie implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	
	private Long id;
	private String title;
	private String subTitle;
	private Integer year;
	private String imgUrl;
	private String synopsis;
	
	public Movie() {
		
	}
		
	public Movie(Long id, String title, String subTitle, Integer year, String imgUrl, String synopsis) {
		super();
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUrl = imgUrl;
		this.synopsis = synopsis;
	}
	
	
		

}
