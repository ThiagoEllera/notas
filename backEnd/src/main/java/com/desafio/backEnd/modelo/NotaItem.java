package com.desafio.backEnd.modelo;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class NotaItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Nota nota;


    private Integer numero;


    @ManyToOne
    private Produto produto;

    private BigDecimal quantidade;


    public NotaItem() {

    }

    public NotaItem(Integer numero, BigDecimal quantidade, Nota nota, Produto produto) {
        this.numero = numero;
        this.quantidade = quantidade;
        this.nota = nota;
        this.produto = produto;
    }

    public Integer getId() {
        return id;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public BigDecimal getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(BigDecimal quantidade) {
        this.quantidade = quantidade;
    }

    public Nota getNota() {
        return nota;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNota(Nota nota) {
        this.nota = nota;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }


}
