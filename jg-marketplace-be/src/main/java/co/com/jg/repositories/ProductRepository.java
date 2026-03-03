package co.com.jg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.jg.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{
	
}
