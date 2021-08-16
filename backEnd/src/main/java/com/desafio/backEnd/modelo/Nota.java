package com.desafio.backEnd.modelo;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Nota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Temporal(TemporalType.DATE)
    //@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "Brazil/East")
    private Date dataCompra;
    private Integer numero;

    @ManyToOne
    private Cliente cliente;

    @OneToMany(mappedBy = "nota", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NotaItem> notaItem = new ArrayList<>();
    ;

    public Nota() {

    }

    public Nota(Integer id, Date dataCompra, Integer numero, Cliente cliente, List<NotaItem> notaItem) {
        this.id = id;
        this.dataCompra = dataCompra;
        this.numero = numero;
        this.cliente = cliente;
        this.notaItem = notaItem;
    }

    public Date getDataCompra() {
        return dataCompra;
    }

    public void setDataCompra(Date dataCompra) {
        this.dataCompra = dataCompra;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public Integer getId() {
        return id;
    }

    public Cliente getCliente() {
        return cliente;
    }



    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<NotaItem> getNotaItem() {
        return notaItem;
    }

    public void setNotaItem(List<NotaItem> notaItem) {
        this.notaItem = notaItem;
    }

    @Override
    public String toString() {
        return "Nota{" +
                "id=" + id +
                ", dataCompra=" + dataCompra +
                ", numero=" + numero +
                ", cliente=" + cliente +
                ", notaItem=" + notaItem +
                '}';
    }
}
