package com.desafio.backEnd.controller.form;

import com.desafio.backEnd.modelo.NotaItem;
import com.desafio.backEnd.repository.NotaItemRepository;
import com.desafio.backEnd.repository.NotaRepository;
import com.desafio.backEnd.repository.ProdutoRepository;

import java.math.BigDecimal;

public class AtulizacaoNotaItemForm {

    private Integer numero;
    private BigDecimal quantidade;
    private Integer numeroNota;
    private String nomeProduto;

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


    public Integer getNumeroNota() {
        return numeroNota;
    }

    public void setNumeroNota(Integer numeroNota) {
        this.numeroNota = numeroNota;
    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public NotaItem atualizar(Integer id, NotaItemRepository notaItemRepository, ProdutoRepository produtoRepository, NotaRepository notaRepository) {
        NotaItem notaItem = notaItemRepository.getById(id);


        notaItem.setNumero((this.numero != null) ? this.numero : notaItem.getNumero());
        notaItem.setQuantidade((this.quantidade != null) ? this.quantidade : notaItem.getQuantidade()) ;
        notaItem.setNota(notaRepository.getByNumero((numeroNota != null) ? numeroNota:notaItem.getNota().getNumero()));
        notaItem.setProduto(produtoRepository.getByDescricao((nomeProduto != null) ? nomeProduto:notaItem.getProduto().getDescricao()));

        return notaItem;

    }


}


