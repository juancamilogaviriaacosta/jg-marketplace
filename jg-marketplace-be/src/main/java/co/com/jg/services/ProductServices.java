package co.com.jg.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import co.com.jg.entities.Product;
import co.com.jg.repositories.ProductRepository;

@Service
public class ProductServices {
	
	@Autowired
	private ProductRepository repo;

	public List<Product> findAll() {
		return repo.findAll();
	}

	public ResponseEntity<Map<String, String>> createProduct(Product product) {
		repo.save(product);
		return ResponseEntity.ok(Map.of("message","ok"));
	}
	
	public Product findById(Long id) {
		return repo.findById(id).get();
	}
	
	public ResponseEntity<Map<String, String>> deleteById(Long id) {
		repo.deleteById(id);
		return ResponseEntity.ok(Map.of("message","deleted"));
	}
}
