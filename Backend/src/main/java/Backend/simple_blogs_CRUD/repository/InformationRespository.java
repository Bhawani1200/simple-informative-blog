package Backend.simple_blogs_CRUD.repository;

import Backend.simple_blogs_CRUD.entity.Information;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InformationRespository extends JpaRepository<Information,Long> {
}
