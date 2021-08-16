package com.desafio.backEnd.service.impl;

import com.desafio.backEnd.controller.dto.NotaDto;
import com.desafio.backEnd.controller.dto.NotaItemDto;
import com.desafio.backEnd.modelo.Cliente;
import com.desafio.backEnd.modelo.Nota;
import com.desafio.backEnd.modelo.NotaItem;
import com.desafio.backEnd.modelo.Produto;
import com.desafio.backEnd.repository.ClienteRepository;
import com.desafio.backEnd.repository.NotaItemRepository;
import com.desafio.backEnd.repository.NotaRepository;
import com.desafio.backEnd.repository.ProdutoRepository;
import com.desafio.backEnd.service.NotaService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
    public class NotaServiceImpl implements NotaService {

        private  NotaItemRepository notaItemRepository;
        private  NotaRepository notaRepository;
        private  ClienteRepository clienteRepository;
        private ProdutoRepository produtoRepository;


        public NotaServiceImpl(NotaItemRepository notaItemRepository, NotaRepository notaRepository, ClienteRepository clienteRepository, ProdutoRepository produtoRepository) {
                 this.notaItemRepository = notaItemRepository;
                 this.notaRepository = notaRepository;
                 this.clienteRepository = clienteRepository;
                 this.produtoRepository = produtoRepository;

        }

        @Override
        @Transactional
        public Nota salvar( NotaDto dto ) {
            String nomeCliente = dto.getNomeCliente();
            Cliente cliente = clienteRepository.getByNome(nomeCliente);

            Nota nota = new Nota();
            nota.setNumero(dto.getNumero());
            nota.setDataCompra(dto.getDataCompra());
            nota.setCliente(cliente);

            List<NotaItem> itemsNota = converterItems(nota, dto.getNotaItems());
            notaRepository.save(nota);
            notaItemRepository.saveAll(itemsNota);
            nota.setNotaItem(itemsNota);
            return nota;
        }

        private List<NotaItem> converterItems(Nota nota, List<NotaItemDto> items){
            if(items.isEmpty()){

            }

            return items
                    .stream()
                    .map( dto -> {
                        String nomeProduto = dto.getNomeProduto();
                        Produto produto = produtoRepository.getByDescricao(nomeProduto);


                        NotaItem notaItem = new NotaItem();
                        notaItem.setNumero(dto.getNumero());
                        notaItem.setQuantidade(dto.getQuantidade());
                        notaItem.setNota(nota);
                        notaItem.setProduto(produto);
                        return notaItem;
                    }).collect(Collectors.toList());

        }
    }


