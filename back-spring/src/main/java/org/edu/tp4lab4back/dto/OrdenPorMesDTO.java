package org.edu.tp4lab4back.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class OrdenPorMesDTO {

    private String monthYear;
    private Long orderCount;

}
