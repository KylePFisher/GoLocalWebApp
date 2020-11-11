package GoLocalJavaBackend.repositories.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Businesses")
public class BusinessEntity implements Serializable
{
	private static final long serialVersionUID = 4904883384937165716L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long   id;
	private String name;
	private String location;
	private String latlong;
	private String category;
	private String description;

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getLocation()
	{
		return location;
	}

	public void setLocation(String location)
	{
		this.location = location;
	}

	public String getLatlong()
	{
		return latlong;
	}

	public void setLatlong(String latLong)
	{
		this.latlong = latLong;
	}

	public String getCategory()
	{
		return category;
	}

	public void setCategory(String category)
	{
		this.category = category;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	@Override
	public String toString()
	{
		return "BusinessEntity [id=" + id + ", name=" + name + ", location=" + location + ", category=" + category
				+ "]";
	}
}