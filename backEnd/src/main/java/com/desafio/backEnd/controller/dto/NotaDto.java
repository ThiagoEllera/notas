package com.desafio.backEnd.controller.dto;

import com.desafio.backEnd.modelo.Nota;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class NotaDto {

    private Integer id;
    @NotNull
    @Temporal(TemporalType.DATE)
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "Brazil/East")
    private Date dataCompra;
    @NotNull
    private Integer numero;

    private String nomeCliente;

    private List<NotaItemDto> notaItems;


    public NotaDto() {

    }

    public NotaDto(Nota nota) {
        this.id = nota.getId();
        this.nomeCliente = nota.getCliente().getNome();
        this.dataCompra = nota.getDataCompra();
        this.numero = nota.getNumero();
        this.notaItems = new ArrayList<>();
        this.notaItems.addAll(nota.getNotaItem().stream().map(NotaItemDto::new).collect(Collectors.toList()));

    }

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

    public List<NotaItemDto> getNotaItems() {
        return notaItems;
    }

    public static List<NotaDto> converter(List<Nota> nota) {
        return nota.stream().map(NotaDto::new).collect(Collectors.toList());

    }




    @Override
    public String toString() {
        return "NotaDto [id=" + id + ", dataCompra=" + dataCompra + ", numero=" + numero + ", nomeCliente="
                + nomeCliente + "]";
    }


}
