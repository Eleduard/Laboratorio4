package org.edu.tp4lab4back.servicio;

import org.edu.tp4lab4back.modelo.Categoria;
import org.edu.tp4lab4back.repositorio.CategoriaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServicio {

    @Autowired
    private CategoriaRepositorio categoriaRepositorio;

    public List<Categoria> obtenerCategorias() {
        return categoriaRepositorio.findAll();
    }

    public Categoria obtenerCategoria(long id) {
        return categoriaRepositorio.findById(id).orElse(null);
    }

}
