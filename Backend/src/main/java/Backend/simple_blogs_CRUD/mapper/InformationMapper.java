package Backend.simple_blogs_CRUD.mapper;

import Backend.simple_blogs_CRUD.dto.InformationDto;
import Backend.simple_blogs_CRUD.entity.Information;

public class InformationMapper {
    public  static InformationDto mapToInformationDto(Information information){
        return new InformationDto(
                information.getId(),
                information.getTitle(),
                information.getDescription(),
                information.getContent()
        );
    }

    public  static Information mapToInformation(InformationDto informationDto){
        return new Information(
          informationDto.getId(),
                informationDto.getTitle(),
                informationDto.getDescription(),
                informationDto.getCOntent()
        );
    }
}
