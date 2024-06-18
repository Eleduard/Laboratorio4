package org.edu.tp4lab4back.repositorio;

import org.edu.tp4lab4back.dto.OrdenPorInstrumentoDTO;
import org.edu.tp4lab4back.dto.OrdenPorMesDTO;
import org.edu.tp4lab4back.modelo.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PedidoRepositorio extends JpaRepository<Pedido, Long> {

    @Query("SELECT new org.edu.tp4lab4back.dto.OrdenPorMesDTO(CONCAT(YEAR(p.fechaPedido), '-', MONTH(p.fechaPedido)), COUNT(p)) " +
            "FROM Pedido p GROUP BY YEAR(p.fechaPedido), MONTH(p.fechaPedido)")
    public List<OrdenPorMesDTO> obtenerPorMes();

    @Query("SELECT new org.edu.tp4lab4back.dto.OrdenPorInstrumentoDTO(i.instrumento, COUNT(p)) " +
            "FROM PedidoDetalle pd JOIN pd.pedido p JOIN pd.instrumento i GROUP BY i.instrumento")
    List<OrdenPorInstrumentoDTO> obtenerPorInstrumento();

    @Query("SELECT p FROM Pedido p WHERE p.fechaPedido >= :fechaDesde AND p.fechaPedido <= :fechaHasta")
    List<Pedido> obtenerEntreFechas(LocalDate fechaDesde, LocalDate fechaHasta);

}
