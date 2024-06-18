package org.edu.tp4lab4back;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.edu.tp4lab4back.dto.OrdenPorInstrumentoDTO;
import org.edu.tp4lab4back.dto.OrdenPorMesDTO;
import org.edu.tp4lab4back.modelo.Pedido;
import org.edu.tp4lab4back.modelo.PedidoDetalle;
import org.edu.tp4lab4back.repositorio.PedidoRepositorio;
import org.edu.tp4lab4back.servicio.PedidoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("pedido")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class PedidoControlador {

    @Autowired
    private PedidoServicio pedidoServicio;

    @Autowired
    private PedidoRepositorio pedidoRepositorio;

    private static final int MAX_LINES_PER_SHEET = 50;

    @GetMapping("filtrarPorMes")
    public ResponseEntity<List<OrdenPorMesDTO>> obtenerPorMes() {
        return pedidoServicio.obtenerPorMes(); }

    @GetMapping("filtrarPorInstrumento")
    public ResponseEntity<List<OrdenPorInstrumentoDTO>> obtenerPorInstrumento() {
        return pedidoServicio.obtenerPorInstrumento(); }

    @PostMapping("guardarPedido")
    public Pedido guardarPedido(@RequestBody Pedido pedido) {
        return pedidoServicio.guardarPedido(pedido);
    }

}
