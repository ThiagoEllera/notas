package com.desafio.backEnd.controller.form;

import com.desafio.backEnd.modelo.Cliente;
import com.desafio.backEnd.modelo.Nota;
import com.desafio.backEnd.repository.ClienteRepository;
import com.desafio.backEnd.repository.NotaRepository;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

public class NotaForm {

    @NotNull
    @Temporal(TemporalType.DATE)
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "Brazil/East")
    private Date dataCompra;
    @NotNull
    private Integer numero;
    @NotNull
    @NotEmpty
    private String nomeCliente;

    public Date getDataCompra() {
        return dataCompra;
    }

    public Integer getNumero() {
        return numero;
    }


    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public void setDataCompra(Date dataCompra) {
        this.dataCompra = dataCompra;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public Nota converter(ClienteRepository clienteRepository) {
        Cliente cliente = clienteRepository.getByNome(nomeCliente);
        return new Nota(numero, dataCompra, cliente);
    }

}
