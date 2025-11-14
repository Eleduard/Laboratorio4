package org.edu.tp4lab4back.controlador;

/*import com.google.gson.JsonElement;
import com.google.gson.JsonParser;*/
import io.swagger.v3.oas.annotations.tags.Tag;
import org.edu.tp4lab4back.modelo.Instrumento;
import org.edu.tp4lab4back.servicio.InstrumentoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/*import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.io.Reader;*/
import java.util.List;

@Tag(name = "Instrumento", description = "API REST Instrumento")
@RestController
@RequestMapping("instrumento")
//crear una clase configuración para el cors y otras cosas
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class InstrumentoControlador {

    @Autowired
    private InstrumentoServicio instrumentoServicio;

    @GetMapping(value = "listado")
    public List<Instrumento> obtenerInstrumentos() {
        return instrumentoServicio.obtenerInstrumentos();
    }

    @GetMapping("listado/{id}")
    public Instrumento obtenerInstrumento(@PathVariable int id) {
        return instrumentoServicio.obtenerInstrumento(id);
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

    @PostMapping("agregarInstrumento")
    @PutMapping("agregarInstrumento/{id}")
    public Instrumento crearInstrumento(@RequestBody Instrumento instrumento) {
        System.out.println("instrumento.getInstrumento() = " + instrumento.getInstrumento());
        return instrumentoServicio.crearInstrumento(instrumento);
    }

    @DeleteMapping("eliminarInstrumento/{id}")
    public void eliminarInstrumento(@PathVariable int id) {
        instrumentoServicio.eliminarInstrumento(id);
    }

}
