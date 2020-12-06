package GoLocalJavaBackend.repositories.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "businesses")
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

	public static ArrayList<BusinessEntity> asBusinessEntityList(BusinessEntity[] input)
	{
		ArrayList<BusinessEntity> returnValue = new ArrayList<BusinessEntity>();
		for(int i = 0; i < input.length; i++)
			returnValue.add(input[i]);

		return returnValue;
	}

	@Override
	public String toString()
	{
		return "BusinessEntity [id=" + id + ", name=" + name + ", placeID=" + placeID +", latLong= "+ latlong +", category=" + category
				+ "]";
	}
}