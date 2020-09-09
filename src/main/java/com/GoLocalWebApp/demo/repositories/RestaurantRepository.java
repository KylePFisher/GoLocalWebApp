package com.GoLocalWebApp.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.GoLocalWebApp.demo.repositories.entities.RestaurantEntity;

@Repository
public interface RestaurantRepository extends JpaRepository<RestaurantEntity, Long> {
	RestaurantEntity findByName(String name);
	
	List<RestaurantEntity> findByCategory(String category);
}
