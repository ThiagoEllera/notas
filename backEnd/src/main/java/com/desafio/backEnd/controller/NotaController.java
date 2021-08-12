package com.desafio.backEnd.controller;

import com.desafio.backEnd.controller.dto.DetalhesNotaDto;
import com.desafio.backEnd.controller.dto.NotaDto;
import com.desafio.backEnd.controller.form.AtulizacaoNotaForm;
import com.desafio.backEnd.controller.form.NotaForm;
import com.desafio.backEnd.modelo.Nota;
import com.desafio.backEnd.repository.ClienteRepository;
import com.desafio.backEnd.repository.NotaRepository;
import net.sf.jasperreports.engine.JRException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.io.FileNotFoundException;
import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/nota")
public class NotaController {

    @Autowired
    private NotaRepository notaRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<NotaDto> lista() throws FileNotFoundException, JRException {
        List<Nota> nota = notaRepository.findAll();
        List<NotaDto> lista = NotaDto.converter(nota);

        return lista;
    }


    @PostMapping
    @Transactional
    public ResponseEntity<NotaDto> cadastrar(@RequestBody @Valid NotaForm form, UriComponentsBuilder uriBuilder) {

        Nota nota = form.converter(clienteRepository);
        notaRepository.save(nota);

        URI uri = uriBuilder.path("/nota{id}").buildAndExpand(nota.getId()).toUri();
        return ResponseEntity.created(uri).body(new NotaDto(nota));

    }

    @GetMapping("/{id}")
    public DetalhesNotaDto detalhar(@PathVariable Integer id) {

        Nota nota = notaRepository.getById(id);
        return new DetalhesNotaDto(nota);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<NotaDto> atualizar(@PathVariable Integer id, @RequestBody AtulizacaoNotaForm form) {
        Nota nota = form.atualizar(id, notaRepository, clienteRepository);
        return ResponseEntity.ok(new NotaDto(nota));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> remover(@PathVariable Integer id) {
        notaRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
