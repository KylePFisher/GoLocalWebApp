package GoLocalJavaBackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import GoLocalJavaBackend.repositories.entities.BusinessEntity;


@Repository
public interface BusinessRepository extends JpaRepository<BusinessEntity, Long>
{
	Iterable<BusinessEntity> getAllByName(String name);

	Iterable<BusinessEntity> findByCategoryContainingIgnoreCase(String category);

	BusinessEntity getById(Long id);

}
