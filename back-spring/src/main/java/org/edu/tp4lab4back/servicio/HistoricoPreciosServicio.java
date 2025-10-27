package org.edu.tp4lab4back.servicio;

import org.edu.tp4lab4back.modelo.HistoricoPrecios;
import org.edu.tp4lab4back.modelo.Instrumento;
import org.edu.tp4lab4back.repositorio.HistoricoPreciosRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class HistoricoPreciosServicio {
    
    @Autowired
    private HistoricoPreciosRepositorio historicoPreciosRepositorio;
    
    public double obtenerPrecioEnFecha(Instrumento instrumento, LocalDate fecha) {
        return historicoPreciosRepositorio
            .findFirstByInstrumentoAndFechaDesdeBeforeOrderByFechaDesdeDesc(instrumento, fecha)
            .orElseThrow(() -> new RuntimeException("No se encontró precio histórico para la fecha: " + fecha))
            .getPrecio();
    }
    
    public HistoricoPrecios registrarNuevoPrecio(Instrumento instrumento, double nuevoPrecio) {
        if(nuevoPrecio <= 0) {
            throw new IllegalArgumentException("El nuevo precio debe ser mayor que cero.");
        }
        HistoricoPrecios nuevoRegistro = HistoricoPrecios.builder()
            .instrumento(instrumento)
            .fechaDesde(LocalDate.now())
            .precio(nuevoPrecio)
            .build();
        return historicoPreciosRepositorio.save(nuevoRegistro);
    }

    public List<HistoricoPrecios> obtenerHistoricoPorInstrumento(Instrumento instrumento) {
        return historicoPreciosRepositorio.findByInstrumentoOrderByFechaDesdeDesc(instrumento);
    }
    
    public List<HistoricoPrecios> obtenerHistoricoPorPeriodo(Instrumento instrumento, 
                                                            LocalDate fechaInicio, 
                                                            LocalDate fechaFin) {
        return historicoPreciosRepositorio
            .findByInstrumentoAndFechaDesdeBetweenOrderByFechaDesdeDesc(
                instrumento, 
                fechaInicio, 
                fechaFin
            );
    }
    
    public double obtenerUltimoPrecio(Instrumento instrumento) {
        return historicoPreciosRepositorio
            .findFirstByInstrumentoOrderByFechaDesdeDesc(instrumento)
            .orElseThrow(() -> new RuntimeException("No hay precios registrados para el instrumento"))
            .getPrecio();
    }
}