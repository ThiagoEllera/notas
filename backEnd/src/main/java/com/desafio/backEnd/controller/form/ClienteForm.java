package com.desafio.backEnd.controller.form;

import com.desafio.backEnd.modelo.Cliente;
import com.desafio.backEnd.repository.ClienteRepository;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ClienteForm {

    @NotNull
    @NotEmpty
    private String codigo;
    @NotNull
    @NotEmpty
    private String nome;


    public String getCodigo() {
        return codigo;
    }

    public String getNome() {
        return nome;
    }

    public Cliente converter() {
        return new Cliente(codigo, nome);
    }

    public Cliente atualizar(Integer id, ClienteRepository clienteRepository) {
        Cliente cliente = clienteRepository.getById(id);

        cliente.setCodigo((this.codigo != null) ? this.codigo : cliente.getCodigo());
        cliente.setNome((this.nome != null) ? this.nome : cliente.getNome());
        return cliente;
    }
}
