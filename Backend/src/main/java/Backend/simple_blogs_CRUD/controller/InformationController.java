package Backend.simple_blogs_CRUD.controller;

import Backend.simple_blogs_CRUD.dto.InformationDto;
import Backend.simple_blogs_CRUD.services.InformationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/informations")
public class InformationController {

    private InformationService informationService;

    @PostMapping
    public ResponseEntity<InformationDto>createInformation(@RequestBody InformationDto informationDto){
     InformationDto savedInformation=informationService.createInformation(informationDto);
     return new ResponseEntity<>(savedInformation,HttpStatus.CREATED);
    }
}
