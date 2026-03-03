package co.com.jg.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import co.com.jg.entities.Cart;

public interface CartRepository extends JpaRepository<Cart,Long>{
	Optional<Cart> findByUserId(Long id);
}