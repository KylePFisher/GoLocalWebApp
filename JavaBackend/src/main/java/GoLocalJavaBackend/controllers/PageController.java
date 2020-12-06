package GoLocalJavaBackend.controllers;

import GoLocalJavaBackend.repositories.BusinessRepository;
import GoLocalJavaBackend.repositories.entities.BusinessEntity;
import com.google.common.collect.Iterables;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.google.common.collect.Sets;

import java.lang.reflect.Array;
import java.util.*;


@Controller
public class PageController
{
	private static final int PRIMARY_CATEGORY_POSITION = 0;

	@Autowired
	private BusinessRepository businessRepository;

	@Autowired
	public PageController() {
	}

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping("/getAll")
	public @ResponseBody Iterable<BusinessEntity> getAll()
	{
		return businessRepository.findAll();
	}

	@RequestMapping("/getById")
	public @ResponseBody BusinessEntity getById(@RequestParam Long id)
	{
		return businessRepository.getById(id);
	}

	@GetMapping("/getPrimaryCategories")
	public @ResponseBody String[] getPrimaryCategories()
	{
		ArrayList<BusinessEntity> businesses = Lists.newArrayList(businessRepository.findAll());
		ArrayList<String> primary = new ArrayList<String>();

		for(int i = 0; i < businesses.size(); i++)
		{
			String temp[] = businesses.get(i).getCategory().split(",");
			primary.add(temp[PRIMARY_CATEGORY_POSITION]);
		}

		primary = cleanAndOrganize(primary);

		return primary.toArray(new String[primary.size()]);

	}

	@GetMapping("/getSubCategories")
	public @ResponseBody String[] getSubCategories(String primary)
	{
		List<BusinessEntity> entries = getByCategory(primary);
		ArrayList<String> categories = new ArrayList<String>();

		for(int i = 0; i < entries.size(); i++)
		{
			String[] temp = entries.get(i).getCategory().split(",");
			categories.addAll(Arrays.asList(Arrays.copyOfRange(temp,PRIMARY_CATEGORY_POSITION+1,temp.length)));
		}

		categories = cleanAndOrganize(categories);

		return categories.toArray(new String[categories.size()]);

	}

	@RequestMapping("/getByCategory")
	public @ResponseBody List<BusinessEntity> getByCategory(@RequestParam String category)
	{
		if(category.isEmpty())
			return new ArrayList<BusinessEntity>();

		String inputs[] = category.split(",");

		Set<BusinessEntity> answer = Sets.newHashSet(businessRepository.findByCategoryContainingIgnoreCase(inputs[0]));
		for(int i = 1; i < inputs.length; i++)
		{
			Set<BusinessEntity> temp = Sets.newHashSet( businessRepository.findByCategoryContainingIgnoreCase(inputs[i].replaceAll("\\s", "")));
			answer = Sets.intersection(answer, temp);
		}

		//ArrayList<BusinessEntity> result = BusinessEntity.asBusinessEntityList(answer.toArray(BusinessEntity[]::new));
		ArrayList<BusinessEntity> result = new ArrayList<BusinessEntity>();
		result.addAll(answer);
		return result;
	}

	@RequestMapping("/getLatLong")
	public @ResponseBody String getLatLong(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		return be.getLatlong();
	}

	@RequestMapping("/getLat")
	public @ResponseBody String getLat(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		String[] latLong = be.getLatlong().split(",");
		return latLong[0];
	}

	@RequestMapping("/getLong")
	public @ResponseBody String getLong(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		String[] latLong = be.getLatlong().split(",");
		return latLong[1];
	}


	@RequestMapping("/getPlaceID")
	public @ResponseBody String getDescription(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		return be.getPlaceID();
	}

	@RequestMapping("/getName")
	public @ResponseBody String getName(@RequestParam Long id)
	{
		BusinessEntity be = businessRepository.getById(id);
		return be.getName();
	}

	@GetMapping("/getByName")
	public @ResponseBody Iterable<BusinessEntity> getByName(@RequestParam String name)
	{
		return businessRepository.getAllByName(name);
	}

	private ArrayList<String> cleanAndOrganize(ArrayList<String> input)
	{
		//Remove repeated elements
		Set<String> set = new HashSet<String>(input);
		input.clear();
		input.addAll(set);

		//Sort in alphabetical order
		Collections.sort(input, new Comparator<String>() {
			@Override
			public int compare(String s1, String s2) {
				return s1.compareToIgnoreCase(s2);
			}
		});
		return input;
	}
}