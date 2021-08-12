package com.desafio.backEnd.controller.dto;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import java.util.Date;

public class NotaReportDto {

    private Integer id;
    @NotNull
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "Brazil/East")
    private Date dataCompra;
    @NotNull
    private Integer numero;


    public NotaReportDto(Integer id, @NotNull Date dataCompra, @NotNull Integer numero) {
        super();
        this.id = id;
        this.dataCompra = dataCompra;
        this.numero = numero;
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


}
