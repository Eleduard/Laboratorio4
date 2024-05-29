package org.edu.tp4lab4back.servicio;

import org.edu.tp4lab4back.modelo.Pedido;
import org.edu.tp4lab4back.repositorio.PedidoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoServicio {

    @Autowired
    private PedidoRepositorio pedidoRepositorio;

    public List<Pedido> obtenerPedidos(){
        return pedidoRepositorio.findAll();
    }

    public Pedido obtenerPedido(Long id){
        return pedidoRepositorio.findById(id).orElse(null);
    }

    public Pedido guardarPedido(Pedido pedido){
        return pedidoRepositorio.save(pedido);
    }

    public void eliminarPedido(Long id){
        pedidoRepositorio.deleteById(id);
    }

}
