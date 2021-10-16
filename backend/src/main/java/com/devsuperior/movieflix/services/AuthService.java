package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ForbiddenException;
import com.devsuperior.movieflix.services.exceptions.UnauthorizedException;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public User authenticated() {		
		System.out.println(">>> authenticate: inicio ");
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();
			System.out.println(">>> authenticate: no try  " + username);			
			return userRepository.findByEmail(username);
		}
		catch(Exception e) {
			throw new UnauthorizedException("Invalid user");
		}
	}
	
	public void validadeSelfOrMember(Long userId) {
		System.out.println(">>> validadeSelfOrAdmin, userId:" + userId);
		User user = authenticated();
		System.out.println("<<< authenticated");
		if(!user.getId().equals(userId) && !user.hasHole("ROLE_MEMBER")) {
			System.out.println(">>> validadeSelfOrAdmin: " + user.getId() );
			throw new ForbiddenException("Access denied");	
		}
	}
	
	public User getUserAuthenticated() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		User userAuthenticated = userRepository.findByEmail(authentication.getName());
		
		return userAuthenticated;
	}

	
}
