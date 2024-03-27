import * as React            from 'react';
import { Grid }              from "@mui/material";

//imagenes
import imagen1                from '../../../imagenes/Seccion/Messi.jpg';
import imagen2                from '../../../imagenes/Seccion/alexis.webp';
import imagen3                from '../../../imagenes/Seccion/mago.jpg';
import imagen4                from '../../../imagenes/Seccion/puyol.jpg';
import imagen5                from '../../../imagenes/Seccion/ronaldino.jpg';

export default function CollapsibleTable() {
  
  return (
    <Grid>
      <Grid className="grisCuadro">
        <h2 style={{ textAlign: 'center' }}>Imagenes del campeonato</h2>
          <section>
            <img src={imagen1} alt=""></img>
            <img src={imagen2} alt=""></img>
            <img src={imagen3} alt=""></img>
            <img src={imagen4} alt=""></img>
            <img src={imagen5} alt=""></img>
          </section>
          
      </Grid>
    </Grid>
  );
}