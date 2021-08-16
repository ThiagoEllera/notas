package com.desafio.backEnd.repository;

import com.desafio.backEnd.modelo.NotaItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotaItemRepository extends JpaRepository<NotaItem, Integer> {

}
