package org.edu.tp4lab4back.modelo;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "historico_precios")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class HistoricoPrecios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idHistorico;
    
    @Column(nullable = false)
    private LocalDate fechaDesde;
    
    @Column(nullable = false)
    private double precio;
    
    @ManyToOne
    @JoinColumn(name = "instrumento_id", nullable = false)
    @JsonBackReference
    private Instrumento instrumento;
}
