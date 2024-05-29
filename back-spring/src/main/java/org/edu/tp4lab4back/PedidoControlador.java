package org.edu.tp4lab4back;

import org.edu.tp4lab4back.modelo.Pedido;
import org.edu.tp4lab4back.servicio.PedidoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("pedido")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class PedidoControlador {

    @Autowired
    private PedidoServicio pedidoServicio;

    @PostMapping("guardarPedido")
    public Pedido guardarPedido(@RequestBody Pedido pedido) {
        return pedidoServicio.guardarPedido(pedido);
    }

}
