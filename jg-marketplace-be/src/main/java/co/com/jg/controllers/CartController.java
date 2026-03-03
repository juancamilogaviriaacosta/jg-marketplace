package co.com.jg.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import co.com.jg.entities.Cart;
import co.com.jg.services.CartService;

@RestController
public class CartController {
	
	@Autowired
	private CartService cs;
	
	@GetMapping(path = "api/getCart/{userId}")
    public Cart getCart(@PathVariable("userId") Long userId) {
		return cs.findByUserId(userId);
	}
}
