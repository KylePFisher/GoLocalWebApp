package GoLocalJavaBackend.controllers;

import GoLocalJavaBackend.repositories.BusinessRepository;
import GoLocalJavaBackend.repositories.entities.BusinessEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.google.common.collect.Sets;
import java.util.Set;
import java.util.HashSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@Controller
public class PageController
{

	@Autowired
	private BusinessRepository businessRepository;

	@Autowired
	public PageController() {
	}

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@RequestMapping("/getByCategory")
	public @ResponseBody List<BusinessEntity> getByCategory(@RequestParam String category)
	{
		String inputs[] = category.split(",");
		Set<BusinessEntity> answer = Sets.newHashSet();
		for(int i = 0; i < inputs.length; i++)
		{
			Set<BusinessEntity> temp = Sets.newHashSet( businessRepository.findByCategoryContainingIgnoreCase(inputs[i]));
			answer = Sets.intersection(answer, temp);
		}

		ArrayList<BusinessEntity> result = Arrays.asList(answer.toArray());
		return result;
	}

	@RequestMapping("/getById")
	public @ResponseBody BusinessEntity getById(@RequestParam Long id)
	{
		return businessRepository.getById(id);
	}

	@RequestMapping("/getLatLong")
	public @ResponseBody String getLatLong(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		return be.getLatlong();
	}

	@RequestMapping("/getPlaceID")
	public @ResponseBody String getDescription(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		return be.getPlaceID();
	}

	@GetMapping("/getAll")
	public @ResponseBody Iterable<BusinessEntity> getAll()
	{
		return businessRepository.findAll();
	}

	@GetMapping("/getByName")
	public @ResponseBody Iterable<BusinessEntity> getByName(@RequestParam String name)
	{
		return businessRepository.getAllByName(name);
	}
}