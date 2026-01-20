package org.edu.tp4lab4back.servicio;

import org.edu.tp4lab4back.modelo.Instrumento;
import org.edu.tp4lab4back.repositorio.InstrumentoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstrumentoServicio {

    @Autowired
    private InstrumentoRepositorio instrumentoRepositorio;

    public List<Instrumento> obtenerInstrumentos(){
        return instrumentoRepositorio.findAll();
    }

    public Instrumento obtenerInstrumento(int id){
        return instrumentoRepositorio.findById(id).orElse(null);
    }

    public Instrumento crearInstrumento(Instrumento instrumento){

        instrumentoRepositorio.save(instrumento);
        return instrumento;

    }

    public Instrumento actualizarInstrumento(Instrumento instrumento){

        return instrumentoRepositorio.existsById(instrumento.getIdInstrumento()) ? instrumentoRepositorio.save(instrumento) : null;

    }

    public void eliminarInstrumento(int id){
        instrumentoRepositorio.deleteById(id);
    }

}
