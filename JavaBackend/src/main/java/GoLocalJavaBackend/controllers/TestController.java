package GoLocalJavaBackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import GoLocalJavaBackend.repositories.RestaurantRepository;
import GoLocalJavaBackend.repositories.entities.RestaurantEntity;

@RestController
public class TestController {
	
	RestaurantRepository restaurantRepository;
	
	@Autowired
	public TestController(RestaurantRepository restaurantRepository) {
		this.restaurantRepository = restaurantRepository;
	}
	
	@GetMapping("/test")
	public String home() {
		return "Test url";
	}
	
	@GetMapping("/restaurants/{restaurantName}")
	public RestaurantEntity getSingleRestaurant(@PathVariable("restaurantName") String restaurantName) {
		return restaurantRepository.findByName(restaurantName);
	}
	
	@GetMapping("/restaurants/findAll/{category}")
	public List<RestaurantEntity> getAllRestaurants(@PathVariable("category") String category) {
		System.out.println("CATEGORY FOUND: " + category);
		List<RestaurantEntity> list = restaurantRepository.findByCategory(category);
		System.out.println(list);
		return restaurantRepository.findByCategory(category);
	}
}