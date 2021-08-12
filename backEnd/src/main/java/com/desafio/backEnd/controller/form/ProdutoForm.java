package com.desafio.backEnd.controller.form;

import com.desafio.backEnd.modelo.Produto;
import com.desafio.backEnd.repository.ProdutoRepository;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

public class ProdutoForm {

    @NotNull
    @NotEmpty
    private String codigo;
    @NotNull
    @NotEmpty
    private String descricao;
    @NotNull
    private BigDecimal valor;

    public String getCodigo() {
        return codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Produto converter() {
        return new Produto(codigo, descricao, valor);
    }

    public Produto atualizar(Integer id, ProdutoRepository produtoRepository) {
        Produto produto = produtoRepository.getById(id);

        produto.setCodigo((this.codigo != null) ? this.codigo : produto.getCodigo());
        produto.setDescricao((this.descricao != null) ? this.descricao : produto.getDescricao());
        produto.setValor((this.valor != null) ? this.valor : produto.getValor());

        return produto;
    }


}
