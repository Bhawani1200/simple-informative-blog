package Backend.simple_blogs_CRUD.controller;

import Backend.simple_blogs_CRUD.dto.InformationDto;
import Backend.simple_blogs_CRUD.entity.Information;
import Backend.simple_blogs_CRUD.services.InformationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
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

    @GetMapping("{id}")
  public ResponseEntity<InformationDto>getInformationById(@PathVariable("id") Long informationId){
      InformationDto informationDto=  informationService.getInformationById(informationId);
      return ResponseEntity.ok(informationDto);
  }

  @GetMapping
  public ResponseEntity<List<InformationDto>>getAllInformations(){
      List<InformationDto>informations=  informationService.getAllInformations();
      return ResponseEntity.ok(informations);
  }


}
