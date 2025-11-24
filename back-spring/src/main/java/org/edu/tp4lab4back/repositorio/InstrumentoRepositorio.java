package org.edu.tp4lab4back.repositorio;

import org.edu.tp4lab4back.modelo.Instrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstrumentoRepositorio extends JpaRepository<Instrumento, Integer> {


}
