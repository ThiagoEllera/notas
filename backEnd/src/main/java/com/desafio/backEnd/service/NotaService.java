package com.desafio.backEnd.service;

import com.desafio.backEnd.controller.dto.NotaDto;
import com.desafio.backEnd.modelo.Nota;

public interface NotaService {

    Nota salvar(NotaDto dto);

}
