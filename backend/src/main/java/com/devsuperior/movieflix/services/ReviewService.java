package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.DatabaseException;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import com.devsuperior.movieflix.services.exceptions.UnprocessableEntityException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired 
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	
	
	public List<ReviewDTO> findAll() {
		List<Review> list = repository.findAll(); 
		return list.stream().map( x -> new ReviewDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		Optional<Review> obj = repository.findById(id);
		Review entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));		
		return new ReviewDTO(entity);
	}

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		
		try {
			Review review = new Review();
			Movie movie = movieRepository.getOne(dto.getMovieId());
			
			review.setUser(authService.getUserAuthenticated());
			review.setMovie(movie);
			review.setText(dto.getText());
			review = repository.save(review);		
			return new ReviewDTO(review);
			
		}catch(ServiceException e) {
			throw new UnprocessableEntityException("Erro na formatação");
		}
	}
	
	@Transactional
	public ReviewDTO update(Long id, ReviewDTO dto) {

		try {	
			Review review = repository.getOne(id);
			Movie movie = movieRepository.getOne(dto.getMovieId());
			
			review.setUser(authService.getUserAuthenticated());
			review.setMovie(movie);
			review.setText(dto.getText());
			
			review = repository.save(review);		
			return new ReviewDTO(review);
	   }catch(EntityNotFoundException e) {
		   throw new ResourceNotFoundException("Id not found" + id);
	   }	  
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}		
		catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		}
		catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation"); 
		}
	}

}
