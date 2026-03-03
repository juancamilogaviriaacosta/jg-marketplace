package co.com.jg.services;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import co.com.jg.entities.Cart;
import co.com.jg.entities.CartItem;
import co.com.jg.entities.Product;
import co.com.jg.entities.User;
import co.com.jg.repositories.CartItemRepository;
import co.com.jg.repositories.CartRepository;
import co.com.jg.repositories.ProductRepository;
import co.com.jg.repositories.UserRepository;

@Service
public class CartService {
	
	@Autowired
	private UserRepository ur;
	
	@Autowired
	private ProductRepository pr;
	
	@Autowired
	private CartRepository cr;
	
	@Autowired
	private CartItemRepository cir;
	
	public Cart findByUserId(Long id) {
		Cart cart = null;
		Optional<Cart> optional = cr.findByUserId(id);
		if(optional.isPresent()) {
			cart = optional.get();
		} else {
			User user = ur.findById(id).get();
			cart = cr.save(new Cart(null, user, null));
		}
		return cart;
	}

	public ResponseEntity<Map<String, String>> addToCart(Map<String, Object> map) {
		Cart cart = cr.findByUserId(Long.valueOf(map.get("userId").toString())).get();
		Product product = pr.findById(Long.valueOf(map.get("productId").toString())).get();
		cir.save(new CartItem(null, cart, product, Integer.valueOf(map.get("quantity").toString())));
		return ResponseEntity.ok(Map.of("message","ok"));
	}
	
	public ResponseEntity<Map<String, String>> removeFromCart(Map<String, Object> map) {
		cir.deleteById(Long.valueOf(map.get("id").toString()));
		return ResponseEntity.ok(Map.of("message","ok"));
	}
	
	public ResponseEntity<Map<String, String>> setQuantity(Map<String, Object> map) {
		CartItem ci = cir.findById(Long.valueOf(map.get("id").toString())).get();
		ci.setQuantity(Integer.valueOf(map.get("quantity").toString()));
		cir.save(ci);
		return ResponseEntity.ok(Map.of("message","ok"));
	}
	
	
}