package co.com.jg.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import co.com.jg.entities.Product;
import co.com.jg.repositories.ProductRepository;

@Service
public class ProductServices {
	
	@Autowired
	private ProductRepository repo;
	
	public ResponseEntity<String> initDatabase() {
		List<Product> products = List.of(
			new Product(null, "sku001", "iPhone 14", "Apple", "https://img.freepik.com/free-psd/iphone-15-pro-mockup-front-back-view_1332-60588.jpg", 5000.0, 5),
			new Product(null, "sku002", "Galaxy S23", "Samsung", "https://img.freepik.com/premium-psd/samsung-galaxy-s23-mockup-front-view_1332-54971.jpg", 4200.0, 10),
			new Product(null, "sku003", "Macbook Air", "M2", "https://img.freepik.com/free-psd/macbook-mockup-floating_1332-60671.jpg",7000.0, 3),
			new Product(null, "sku004", "Audifonos Sony", "Noise cancel", "https://img.freepik.com/free-photo/black-cordless-headphones-gray-textile_417767-474.jpg",600.0, 20)
		);
		repo.saveAll(products);
		return ResponseEntity.ok("ok");
	}

	public List<Product> findAll() {
		return repo.findAll();
	}
}
