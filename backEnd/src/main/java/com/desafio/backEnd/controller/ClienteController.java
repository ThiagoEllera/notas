package com.desafio.backEnd.controller;

import com.desafio.backEnd.controller.dto.ClienteDto;
import com.desafio.backEnd.controller.form.ClienteForm;
import com.desafio.backEnd.modelo.Cliente;
import com.desafio.backEnd.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<ClienteDto> lista() {
        List<Cliente> cliente = clienteRepository.findAll();
        return ClienteDto.converter(cliente);
    }

    @PostMapping
    @Transactional
    public ResponseEntity<ClienteDto> cadastrar(@RequestBody @Valid ClienteForm form, UriComponentsBuilder uriBuilder) {

        Cliente cliente = form.converter();
        clienteRepository.save(cliente);

        URI uri = uriBuilder.path("/cliente{id}").buildAndExpand(cliente.getId()).toUri();
        return ResponseEntity.created(uri).body(new ClienteDto(cliente));
    }

    @GetMapping("/{id}")
    public ClienteDto detalhar(@PathVariable Integer id) {

        Cliente cliente = clienteRepository.getById(id);
        return new ClienteDto(cliente);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<ClienteDto> atualizar(@PathVariable Integer id, @RequestBody ClienteForm form) {
        Cliente cliente = form.atualizar(id, clienteRepository);

        return ResponseEntity.ok(new ClienteDto(cliente));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> remover(@PathVariable Integer id) {
        clienteRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
