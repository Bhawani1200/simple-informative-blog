package Backend.simple_blogs_CRUD.services;

import Backend.simple_blogs_CRUD.dto.InformationDto;

import java.util.List;

public interface InformationService {
    InformationDto createInformation(InformationDto informationDto);

    InformationDto getInformationById(Long informationId );

    List<InformationDto>getAllInformations();
}
