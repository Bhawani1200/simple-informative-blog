package Backend.simple_blogs_CRUD.services.Impl;

import Backend.simple_blogs_CRUD.dto.InformationDto;
import Backend.simple_blogs_CRUD.entity.Information;
import Backend.simple_blogs_CRUD.exception.ResourceNotFoundException;
import Backend.simple_blogs_CRUD.mapper.InformationMapper;
import Backend.simple_blogs_CRUD.repository.InformationRespository;
import Backend.simple_blogs_CRUD.services.InformationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


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

    @Override
    public InformationDto getInformationById(Long informationId) {
     Information information=  informationRespository.findById(informationId).orElseThrow(
               ()->new ResourceNotFoundException("Information with given id doesnot exist"+informationId));
    return InformationMapper.mapToInformationDto(information);
    }

    @Override
    public List<InformationDto> getAllInformations() {
       List<Information>informations= informationRespository.findAll();
       return informations.stream().map((information)->
           InformationMapper.mapToInformationDto(information)).collect(Collectors.toList());

    }

}
