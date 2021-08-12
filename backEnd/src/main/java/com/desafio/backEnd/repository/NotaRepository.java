package com.desafio.backEnd.repository;

import com.desafio.backEnd.modelo.Nota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotaRepository extends JpaRepository<Nota, Integer> {

    Nota findByNumero(Integer numeroNota);

    Nota getByNumero(Integer numeroNota);

}
