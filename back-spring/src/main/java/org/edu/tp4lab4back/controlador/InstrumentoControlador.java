package org.edu.tp4lab4back.controlador;

//import com.google.gson.JsonElement;
//import com.google.gson.JsonParser;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.edu.tp4lab4back.modelo.Instrumento;
import org.edu.tp4lab4back.servicio.InstrumentoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/*import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.io.Reader;*/
import java.net.URI;
import java.util.List;

@Tag(name = "Instrumento", description = "API REST Instrumento")
@RestController
@RequestMapping("/api/instrumentos")
//crear una clase configuración para el cors y otras cosas
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class InstrumentoControlador {

    @Autowired
    private InstrumentoServicio instrumentoServicio;

    @GetMapping
    public ResponseEntity<List<Instrumento>> obtenerInstrumentos() {
        return ResponseEntity.ok(instrumentoServicio.obtenerInstrumentos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Instrumento> obtenerInstrumento(@PathVariable int id) {
        return ResponseEntity.ok(instrumentoServicio.obtenerInstrumento(id));
    }

    @PostMapping
    public ResponseEntity<Void> crearInstrumento(@RequestBody Instrumento instrumento) {
        System.out.println("instrumento.getInstrumento() = " + instrumento.getDescripcion());
        Instrumento creado = instrumentoServicio.crearInstrumento(instrumento);
        URI location = URI.create("/api/instrumentos/" + creado.getIdInstrumento());
        return ResponseEntity
                .created(location)
                .build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> actualizarInstrumento(@PathVariable int id, @RequestBody Instrumento instrumento) {
        Instrumento creado = instrumentoServicio.actualizarInstrumento(instrumentoServicio.obtenerInstrumento(id));
        return ResponseEntity
                .ok()
                .build();
    }

    @DeleteMapping("eliminarInstrumento/{id}")
    public void eliminarInstrumento(@PathVariable int id) {
        instrumentoServicio.eliminarInstrumento(id);
    }

}

//arreglar porque no anda
    /*@PostMapping("poblar-base")
    @Transactional
    public void crearInstrumento() throws FileNotFoundException {
        try {
            ClassPathResource resource = new ClassPathResource("instrumentos.json");

            // DEBUG 1: Verificar si el archivo existe
            System.out.println("¿Archivo existe? " + resource.exists());
            System.out.println("Path: " + resource.getPath());
            System.out.println("Descripción: " + resource.getDescription());

            Reader archivo = new InputStreamReader(resource.getInputStream());
            JsonElement elemento = JsonParser.parseReader(archivo);
            for (JsonElement inst : elemento.getAsJsonObject().getAsJsonArray("instrumentos")) {
                Instrumento instrumento = Instrumento.builder()
                        .idInstrumento(inst.getAsJsonObject().get("id").getAsInt())
                        .instrumento(inst.getAsJsonObject().get("instrumento").getAsString())
                        .marca(inst.getAsJsonObject().get("marca").getAsString())
                        .modelo(inst.getAsJsonObject().get("modelo").getAsString())
                        .imagen(inst.getAsJsonObject().get("imagen").getAsString())
                        .precio(inst.getAsJsonObject().get("precio").getAsDouble())
                        .costoEnvio(inst.getAsJsonObject().get("costoEnvio").getAsString())
                        .cantidadVendida(inst.getAsJsonObject().get("cantidadVendida").getAsInt())
                        .build();

                instrumentoServicio.crearInstrumento(instrumento);
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }*/
