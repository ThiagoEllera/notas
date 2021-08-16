package com.desafio.backEnd.controller;

import com.desafio.backEnd.controller.dto.NotaDto;
import com.desafio.backEnd.modelo.Nota;
import com.desafio.backEnd.service.NotaService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.CREATED;


@RestController
//@RequestMapping("/nota")
public class TestController {

    private NotaService service;

    public TestController(NotaService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(CREATED)
    public Integer save(@RequestBody NotaDto dto ){
        Nota nota = service.salvar(dto);
        return nota.getId();
    }

}
