package GoLocalJavaBackend.controllers;

import GoLocalJavaBackend.repositories.BusinessRepository;
import GoLocalJavaBackend.repositories.entities.BusinessEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class PageController
{
	private BusinessRepository businessRepository;

	@Autowired
	public PageController(BusinessRepository businessRepository) {
		this.businessRepository = businessRepository;
	}

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@RequestMapping("/getByCategory")
	public @ResponseBody Iterable<BusinessEntity> getByCategory(@RequestParam String category)
	{
		return businessRepository.findByCategoryContainingIgnoreCase(category);
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

	@RequestMapping("/getDescription")
	public @ResponseBody String getDescription(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		return be.getDescription();
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