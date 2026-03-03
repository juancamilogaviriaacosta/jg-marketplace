package co.com.jg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.com.jg.entities.Cart;
import co.com.jg.repositories.CartRepository;

@Service
public class CartService {
	
	@Autowired
	private CartRepository repo;
	
	public Cart findByUserId(Long id) {
		return repo.findByUserId(id).get();
	}
	
}