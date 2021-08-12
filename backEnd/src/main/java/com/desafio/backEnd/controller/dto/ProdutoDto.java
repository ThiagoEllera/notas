package com.desafio.backEnd.controller.dto;

import com.desafio.backEnd.modelo.Produto;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

public class ProdutoDto {

    private Integer id;
    private String codigo;
    private String descricao;
    private BigDecimal valor;

    public ProdutoDto(Produto produto) {
        this.id = produto.getId();
        this.codigo = produto.getCodigo();
        this.descricao = produto.getDescricao();
        this.valor = produto.getValor();
    }

    public Integer getId() {
        return id;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public static List<ProdutoDto> converter(List<Produto> produto) {
        return produto.stream().map(ProdutoDto::new).collect(Collectors.toList());
    }


}
