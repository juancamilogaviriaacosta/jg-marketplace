package co.com.jg.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.jg.entities.Product;
import co.com.jg.services.ProductServices;

@RestController
public class ProductController {
	
	@Autowired
	private ProductServices ps;
	
	@GetMapping(path = "api/initDatabase")
    public ResponseEntity<String> initDatabase() {
		return ps.initDatabase();
	}
	
	@GetMapping(path = "api/getProducts")
    public List<Product> getProducts() {
		return ps.findAll();
	}

}
