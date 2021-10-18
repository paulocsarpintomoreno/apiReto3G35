package reto3.reto3.web;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import reto3.reto3.model.Audience;
import reto3.reto3.service.ServiciosAudience;

@RestController
@RequestMapping("/api/Audience")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})

public class ControladorAudience {
     @Autowired
    private ServiciosAudience servicio;
    @GetMapping("/all")
    public List<Audience> getAudiences(){
        return servicio.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Audience> getAudience(@PathVariable("id") int audienceId) {
        return servicio.getAudience(audienceId);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Audience save(@RequestBody Audience audience) {
        return servicio.save(audience);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Audience update(@RequestBody Audience audience) {
        return servicio.update(audience);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int audienceId) {
        return servicio.deleteAudience(audienceId);
    } 
}
