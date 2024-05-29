package org.edu.tp4lab4back.modelo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="pedido_detalle")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class PedidoDetalle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPedidoDetalle;
    private int cantidad;

    @ManyToOne
    @JoinColumn(name = "pedido_id")
    @JsonBackReference
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "instrumento_id")
    private Instrumento instrumento;

}
