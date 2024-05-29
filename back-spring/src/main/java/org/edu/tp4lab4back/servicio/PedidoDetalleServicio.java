package org.edu.tp4lab4back.servicio;

import org.edu.tp4lab4back.modelo.PedidoDetalle;
import org.edu.tp4lab4back.repositorio.PedidoDetalleRepositorio;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoDetalleServicio {

    private PedidoDetalleRepositorio pedidoDetalleRepositorio;

    public List<PedidoDetalle> obtenerPedidosDetalle() {
        return pedidoDetalleRepositorio.findAll();
    }

    public PedidoDetalle obtenerPedidoDetalle(long id) {
        return pedidoDetalleRepositorio.findById(id).orElse(null);
    }

    public PedidoDetalle agregarPedidoDetalle(PedidoDetalle pedidoDetalle) {
        return pedidoDetalleRepositorio.save(pedidoDetalle);
    }

    public void eliminarPedidoDetalle(long id) {
        pedidoDetalleRepositorio.deleteById(id);
    }

}
