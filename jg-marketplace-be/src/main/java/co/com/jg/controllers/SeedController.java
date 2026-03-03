package co.com.jg.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.jg.entities.Cart;
import co.com.jg.entities.CartItem;
import co.com.jg.entities.Product;
import co.com.jg.entities.User;
import co.com.jg.repositories.CartItemRepository;
import co.com.jg.repositories.CartRepository;
import co.com.jg.repositories.ProductRepository;
import co.com.jg.repositories.UserRepository;

@RestController
public class SeedController {
	
	@Autowired
	private ProductRepository pr;
	
	@Autowired
	private UserRepository ur;
	
	@Autowired
	private CartRepository cr;
	
	@Autowired
	private CartItemRepository cir;
	
	@GetMapping(path = "api/initDatabase")
    public ResponseEntity<Map<String, String>> initDatabase() {
		Product p1 = pr.save(new Product(null, "sku001", "iPhone 14", "Apple", "https://img.freepik.com/free-psd/iphone-15-pro-mockup-front-back-view_1332-60588.jpg", 5000.0, 5));
		Product p2 = pr.save(new Product(null, "sku002", "Galaxy S23", "Samsung", "https://img.freepik.com/premium-psd/samsung-galaxy-s23-mockup-front-view_1332-54971.jpg", 4200.0, 10));
		pr.save(new Product(null, "sku003", "Macbook Air", "M2", "https://img.freepik.com/free-psd/macbook-mockup-floating_1332-60671.jpg",7000.0, 3));
		pr.save(new Product(null, "sku004", "Audifonos Sony", "Noise cancel", "https://img.freepik.com/free-photo/black-cordless-headphones-gray-textile_417767-474.jpg",600.0, 20));
		
		ur.save(new User(null, "admin@admin.com", "123456", "admin"));
		User user = ur.save(new User(null, "user@user.com", "123456", "user"));
		Cart cart = cr.save(new Cart(null, user, null));
		cir.save(new CartItem(null, cart, p1, 3));
		cir.save(new CartItem(null, cart, p2, 1));
				
		return ResponseEntity.ok(Map.of("message","ok"));
	}
}
