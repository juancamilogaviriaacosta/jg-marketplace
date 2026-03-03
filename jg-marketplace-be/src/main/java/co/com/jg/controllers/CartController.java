package co.com.jg.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping(path = "api/addToCart")
	public ResponseEntity<Map<String, String>> addToCart(@RequestBody Map<String, Object> map) {
		return cs.addToCart(map);
	}
	
	@PostMapping(path = "api/removeFromCart")
	public ResponseEntity<Map<String, String>> removeFromCart(@RequestBody Map<String, Object> map) {
		return cs.removeFromCart(map);
	}
	
	@PostMapping(path = "api/setQuantity")
	public ResponseEntity<Map<String, String>> setQuantity(@RequestBody Map<String, Object> map) {
		return cs.setQuantity(map);
	}
	
	@PostMapping(path = "api/checkout")
	public ResponseEntity<Map<String, String>> checkout(@RequestBody Map<String, Object> map) {
		return cs.checkout(map);
	}
	
}
