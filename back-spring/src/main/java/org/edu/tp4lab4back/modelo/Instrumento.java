package org.edu.tp4lab4back.modelo;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "instrumento")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Instrumento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idInstrumento;
    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private double precio;

    @Column(name = "costo_envio")
    private String costoEnvio;

    @Column(name = "cantidad_vendida")
    private int cantidadVendida;
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

}
