package Backend.simple_blogs_CRUD.services.Impl;

import Backend.simple_blogs_CRUD.dto.InformationDto;
import Backend.simple_blogs_CRUD.entity.Information;
import Backend.simple_blogs_CRUD.mapper.InformationMapper;
import Backend.simple_blogs_CRUD.repository.InformationRespository;
import Backend.simple_blogs_CRUD.services.InformationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class InformationServiceImpl implements InformationService {
    private InformationRespository informationRespository;

    @Override
    public InformationDto createInformation(InformationDto informationDto) {
        Information information= InformationMapper.mapToInformation(informationDto);
        Information savedInformation=informationRespository.save(information);
        return InformationMapper.mapToInformationDto(savedInformation);
    }
}
