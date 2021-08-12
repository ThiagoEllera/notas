package com.desafio.backEnd.controller.form;

import com.desafio.backEnd.modelo.Nota;
import com.desafio.backEnd.repository.ClienteRepository;
import com.desafio.backEnd.repository.NotaRepository;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

public class AtulizacaoNotaForm {

    private Integer id;
    @Temporal(TemporalType.DATE)
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "Brazil/East")
    private Date dataCompra;
    private Integer numero;
    private String nomeCliente;

    public Integer getId() {
        return id;
    }

    public Date getDataCompra() {
        return dataCompra;
    }

    public Integer getNumero() {
        return numero;
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public Nota atualizar(Integer id, NotaRepository notaRepository, ClienteRepository clienteRepository) {
        Nota nota = notaRepository.getById(id);

        nota.setNumero((this.numero != null) ? this.numero : nota.getNumero());
        nota.setDataCompra((this.dataCompra != null) ? this.dataCompra : nota.getDataCompra());
        nota.setCliente(clienteRepository.getByNome((nomeCliente != null) ? nomeCliente:nota.getCliente().getNome()));

        return nota;

    }


}
