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
	private String placeID;
	private String latlong;
	private String category;

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getPlaceID()
	{
		return placeID;
	}

	public void setPlaceID(String placeID)
	{
		this.placeID = placeID;
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

	@Override
	public String toString()
	{
		return "BusinessEntity [id=" + id + ", name=" + name + ", placeID=" + placeID +", latLong= "+ latlong +", category=" + category
				+ "]";
	}
}