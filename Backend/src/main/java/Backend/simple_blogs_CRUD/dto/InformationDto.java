package Backend.simple_blogs_CRUD.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InformationDto {
    private Long id;
    private String title;
    private String description;
    private String content;


}
