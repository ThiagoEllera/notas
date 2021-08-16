package com.desafio.backEnd.repository;

import com.desafio.backEnd.modelo.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    Cliente getByNome(String nomeCliente);

}
