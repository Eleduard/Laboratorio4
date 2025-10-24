package org.edu.tp4lab4back.servicio;

import org.edu.tp4lab4back.dto.OrdenPorInstrumentoDTO;
import org.edu.tp4lab4back.dto.OrdenPorMesDTO;
import org.edu.tp4lab4back.modelo.Pedido;
//import org.edu.tp4lab4back.modelo.PedidoDetalle;
import org.edu.tp4lab4back.repositorio.PedidoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.RequestBody;

/*import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;*/
import java.util.List;

@Service
public class PedidoServicio {

    @Autowired
    private PedidoRepositorio pedidoRepositorio;
    //private static final int MAX_LINES_PER_SHEET = 50;

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

    public ResponseEntity<List<OrdenPorMesDTO>> obtenerPorMes() {
        List<OrdenPorMesDTO> pedidos = pedidoRepositorio.obtenerPorMes();
        return ResponseEntity.ok(pedidos);
    }

    public ResponseEntity<List<OrdenPorInstrumentoDTO>> obtenerPorInstrumento() {
        List<OrdenPorInstrumentoDTO> pedidos = pedidoRepositorio.obtenerPorInstrumento();
        return ResponseEntity.ok(pedidos);
    }

}
