package org.edu.tp4lab4back.servicio;

import com.google.common.hash.Hashing;
import org.edu.tp4lab4back.modelo.Usuario;
import org.edu.tp4lab4back.repositorio.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class UsuarioServicio {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    public List<Usuario> obtenerUsuarios(){
        return usuarioRepositorio.findAll();
    }

    public Usuario obtenerUsuario(long id){
        return usuarioRepositorio.findById(id).orElse(null);
    }

    public Usuario findByUser(String nombre) {
        return usuarioRepositorio.findByUser(nombre);
    }

    public Usuario validarUsuario(String nombre, String password) {
        try {
            Usuario user = findByUser(nombre);
            if(user != null) {
                String claveEncriptada = Hashing.sha256()
                        .hashString(password, StandardCharsets.UTF_8)
                        .toString();
                if(claveEncriptada.equals(user.getClave())) {
                    return user;
                } else {
                    throw new Exception("Contraseña incorrecta");
                }
            } else {
                throw new Exception("No existe el usuario.");
            }
        } catch (Exception e) {
            return null;
        }
    }

    public Usuario crearUsuario(Usuario usuario){

        String claveEncriptada = Hashing.sha256()
                .hashString(usuario.getClave(), StandardCharsets.UTF_8)
                .toString();
        usuario.setClave(claveEncriptada);

        return usuarioRepositorio.save(usuario);
    }

    public void eliminarUsuario(long id){
        usuarioRepositorio.deleteById(id);
    }

}
