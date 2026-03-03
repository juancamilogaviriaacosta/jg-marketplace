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

import co.com.jg.entities.User;
import co.com.jg.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService us;

	@GetMapping(path = "api/getUsers")
    public List<User> getUsers() {
		return us.findAll();
	}
	
	@PostMapping(path = "api/createUser")
	public ResponseEntity<Map<String, String>> createUser(@RequestBody User user) {
		return us.createUser(user);
	}
	
	@GetMapping(path = "api/getUser/{id}")
    public User getUser(@PathVariable("id") Long id) {
		return us.findById(id);
	}
	
	@DeleteMapping(path = "api/deleteUser/{id}")
    public ResponseEntity<Map<String, String>> deleteUser(@PathVariable("id") Long id) {
		return us.deleteById(id);
	}
}
