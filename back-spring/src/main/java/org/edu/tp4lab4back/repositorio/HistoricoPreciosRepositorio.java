package org.edu.tp4lab4back.repositorio;

import org.edu.tp4lab4back.modelo.HistoricoPrecios;
import org.edu.tp4lab4back.modelo.Instrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface HistoricoPreciosRepositorio extends JpaRepository<HistoricoPrecios, Long> {
    Optional<HistoricoPrecios> findFirstByInstrumentoAndFechaDesdeBeforeOrderByFechaDesdeDesc(
        Instrumento instrumento, 
        LocalDate fecha
    );

    List<HistoricoPrecios> findByInstrumentoOrderByFechaDesdeDesc(Instrumento instrumento);
    
    List<HistoricoPrecios> findByInstrumentoAndFechaDesdeBetweenOrderByFechaDesdeDesc(
        Instrumento instrumento,
        LocalDate fechaInicio,
        LocalDate fechaFin
    );
    
    Optional<HistoricoPrecios> findFirstByInstrumentoOrderByFechaDesdeDesc(Instrumento instrumento);

}