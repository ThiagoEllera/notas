package com.desafio.backEnd.repository;

import com.desafio.backEnd.modelo.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    Produto findByDescricao(String nomeProduto);

    Produto getByDescricao(String nomeProduto);

}
