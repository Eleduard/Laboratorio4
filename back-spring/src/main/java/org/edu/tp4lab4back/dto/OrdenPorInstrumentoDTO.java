package org.edu.tp4lab4back.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class OrdenPorInstrumentoDTO {

    private String instrumento;
    private Long orden;

}
