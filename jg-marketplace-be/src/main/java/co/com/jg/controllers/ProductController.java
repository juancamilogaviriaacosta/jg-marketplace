package co.com.jg.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import co.com.jg.entities.Product;
import co.com.jg.services.ProductServices;

@RestController
public class ProductController {
	
	@Autowired
	private ProductServices ps;
	
	@GetMapping(path = "api/initDatabase")
    public ResponseEntity<Map<String, String>> initDatabase() {
		return ps.initDatabase();
	}
	
	@GetMapping(path = "api/getProducts")
    public List<Product> getProducts() {
		return ps.findAll();
	}
	
	@PostMapping(path = "api/createProduct")
	public ResponseEntity<Map<String, String>> createProduct(@RequestBody Product product) {
		return ps.createProduct(product);
	}
	
	@GetMapping(path = "api/getProduct/{id}")
    public Product getProduct(@PathVariable("id") Long id) {
		return ps.findById(id);
	}
	
	@DeleteMapping(path = "api/deleteProduct/{id}")
    public ResponseEntity<Map<String, String>> deleteProduct(@PathVariable("id") Long id) {
		return ps.deleteById(id);
	}

}
