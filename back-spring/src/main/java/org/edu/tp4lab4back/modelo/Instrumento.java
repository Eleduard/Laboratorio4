package org.edu.tp4lab4back.modelo;

import java.util.Comparator;
import java.util.List;

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
    private String modelo;
    private String imagen;

    @Column(name = "costo_envio")
    private String costoEnvio;

    @Column(name = "cantidad_vendida")
    private int cantidadVendida;
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;

    @OneToMany(mappedBy = "instrumento")
    private List<HistoricoPrecios> historicoPrecios;

    @Transient
    private Double precioActual;

    public double getPrecioActual() {
        if(precioActual != null) {
            return precioActual;
        }
        if (historicoPrecios == null || historicoPrecios.isEmpty()) {
            return 0.0;
        }
        return historicoPrecios.stream()
                .max(Comparator.comparing(HistoricoPrecios::getFechaDesde))
                .map(HistoricoPrecios::getPrecio)
                .orElse(0.0);
    }

}
