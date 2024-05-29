package org.edu.tp4lab4back;

import org.edu.tp4lab4back.modelo.Categoria;
import org.edu.tp4lab4back.servicio.CategoriaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categoria")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET})
public class CategoriaControlador {

    @Autowired
    private CategoriaServicio categoriaServicio;

    @GetMapping("listado")
    public List<Categoria> obtenerCategorias(){
        return categoriaServicio.obtenerCategorias();
    }

    @GetMapping("listado/{id}")
    public Categoria obtenerCategoria(@PathVariable int id){
        return categoriaServicio.obtenerCategoria(id);
    }

}
