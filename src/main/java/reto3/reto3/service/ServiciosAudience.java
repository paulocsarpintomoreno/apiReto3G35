package reto3.reto3.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reto3.reto3.model.Audience;
import reto3.reto3.repository.RepositorioAudience;

@Service
public class ServiciosAudience {
     @Autowired
    private RepositorioAudience metodosCrud;

    public List<Audience> getAll(){
        return metodosCrud.getAll();
    }

    public Optional<Audience> getAudience(int audienceId) {
        return metodosCrud.getAudience(audienceId);
    }

    public Audience save(Audience audience){
        if(audience.getId()==null){
            return metodosCrud.save(audience);
        }else{
            Optional<Audience> e=metodosCrud.getAudience(audience.getId());
            if(e.isEmpty()){
                return metodosCrud.save(audience);
            }else{
                return audience;
            }
        }
    }

    public Audience update(Audience audience){
        if(audience.getId()!=null){
            Optional<Audience> e=metodosCrud.getAudience(audience.getId());
            if(!e.isEmpty()){
                if(audience.getOwner()!=null){
                    e.get().setOwner(audience.getOwner());
                }
                if(audience.getName()!=null){
                    e.get().setName(audience.getName());
                }
                if(audience.getCapacity()!=null){
                    e.get().setCapacity(audience.getCapacity());
                }
                if(audience.getDescription()!=null){
                    e.get().setDescription(audience.getDescription());
                }
                if(audience.getCategory()!=null){
                    e.get().setCategory(audience.getCategory());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return audience;
            }
        }else{
            return audience;
        }
    }


    public boolean deleteAudience(int audienceId) {
        Boolean aBoolean = getAudience(audienceId).map(audience -> {
            metodosCrud.delete(audience);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
