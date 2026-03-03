package co.com.jg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.com.jg.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem,Long>{

}
