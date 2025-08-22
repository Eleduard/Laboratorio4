package org.edu.tp4lab4back.controlador;

import org.edu.tp4lab4back.modelo.Usuario;
import org.edu.tp4lab4back.servicio.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("usuario")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class UsuarioControlador {

    @Autowired
    private UsuarioServicio usuarioServicio;

    @GetMapping(value = "listado")
    public List<Usuario> obtenerUsuarios() {
        return usuarioServicio.obtenerUsuarios();
    }

    @GetMapping("listado/{id}")
    public Usuario obtenerUsuario(@PathVariable long id) {
        return usuarioServicio.obtenerUsuario(id);
    }

    @PostMapping("pornombre")
    public Usuario findByUser(@RequestBody String nombre) {
        return usuarioServicio.findByUser(nombre);
    }

    @PostMapping("validar")
    public Usuario validarUsuario(@RequestBody Map<String, String> user) {
        return usuarioServicio.validarUsuario(user.get("nombre"), user.get("password"));
    }

    @PostMapping("agregarUsuario")
    @PutMapping("agregarUsuario/{id}")
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return usuarioServicio.crearUsuario(usuario);
    }

    @DeleteMapping("eliminarUsuario/{id}")
    public void eliminarUsuario(@PathVariable long id) {
        usuarioServicio.eliminarUsuario(id);
    }

}
