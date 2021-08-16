package com.desafio.backEnd.repository;

import com.desafio.backEnd.modelo.Nota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Integer> {

    Nota findByNumero(Integer numeroNota);

    Nota getByNumero(Integer numeroNota);

}
