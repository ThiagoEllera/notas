package com.desafio.backEnd.repository;

import com.desafio.backEnd.modelo.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    Cliente getByNome(String nomeCliente);

}
