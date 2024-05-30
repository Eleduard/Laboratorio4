package org.edu.tp4lab4back.repositorio;

import org.edu.tp4lab4back.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long> {

    @Query("SELECT u FROM Usuario u WHERE u.nombreUsuario = :usuario")
    Usuario findByUser(String usuario);

}
