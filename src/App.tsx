import { useState } from 'react';
import { Grid, Card, Stack } from '@mui/material'
import chocolates from '../files/flavors_of_cacao.json'
import FiltroLugar from './components/Filtro_lugar'
import IndicatorUI from './components/Indicador'
import TableUI from './components/Tabla'
import './App.css'
import Boton from './components/BotonDescarga';
import Scatter from './components/GDispersion';
import Bar from './components/GBarras';
import Line from './components/GLineas';

function App() {

  const [selectedOption, setSelectedOption] = useState('');

  function aplicarFiltros(datos: any[], selectedOption: string) {
    return selectedOption ? datos.filter(reseña => reseña['Company Location'] === selectedOption) : datos;
  }

  const chocolatesFiltrador = aplicarFiltros(chocolates, selectedOption);
  
  return (
    
    <Grid container spacing={2} sx={{justifyContent:"center", alignItems:"center"}}>

      {/* Barra lateral con filtros */}
      <Grid size={{xs:12, md:3}} sx={{display: { xs: 'none', md: 'block' }}}>
        <FiltroLugar onOptionSelect={setSelectedOption} />
        <p>
          Pingas: <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{selectedOption}</span>
        </p>
      </Grid>

      {/* Main */}
      <Grid size={{xs:12, md:9}} sx={{backgroundColor: "lightgray"}}>

        <Stack spacing={2}>
        
          {/* Encabezado */}
          <Grid container size={{xs:12, md:12}}>
            
            {/* Titulo de la pagina */}
            <Grid size={{xs:12, md:6}}>
              <Card>Titulo de la pagina</Card>
            </Grid>

            {/* Botón de descarga */}
            <Grid size={{xs:12, md:6}}>
              <Boton texto="Descargar Datos" />
            </Grid>

          </Grid>

          {/* Indicadores */}
          <Grid container size={{xs:12, md:12}}>
            
            <Grid size={{xs:12, md:4}}>
              <IndicatorUI title="Cantidad de datos" contenido={chocolatesFiltrador.length} />
            </Grid>

            <Grid size={{xs:12, md:4}}>
              <IndicatorUI title="Puntaje promedio" contenido={`${Math.round((chocolatesFiltrador.reduce((inicial, actual) => inicial + actual['Rating'], 0) / chocolatesFiltrador.length) * 100) / 100} / 5.0`} />
            </Grid>

            <Grid size={{xs:12, md:4}}>
              <IndicatorUI title="Porcentaje de cocoa promedio" contenido={`${Math.round((chocolatesFiltrador.map((reseña) => Number(reseña['Cocoa Percent'].replace("%",""))).reduce((inicial, actual) => inicial + actual, 0) / chocolatesFiltrador.length) * 10) / 10} %`} />
            </Grid>

          </Grid>

          {/* Gráficos */}
          <Grid container size={{xs:12, md:12}} sx={{justifyContent:"center", alignItems:"center"}}>

            {/* Primeros gráficos */}
            <Grid container size={{xs:12, md:6}}>
              
              <Grid size={{xs:12, md:12}}>
                <Scatter lista={chocolatesFiltrador} />
              </Grid>

            </Grid>

            {/* Segundos gráficos */}
            <Grid container size={{xs:12, md:6}}>
              
              <Grid size={{xs:12, md:12}}>
                <Bar lista={chocolatesFiltrador} />
              </Grid>

              <Grid size={{xs:12, md:12}}>
                <Line lista={chocolatesFiltrador} />
              </Grid>

            </Grid>

          </Grid>

          {/* Tabla */}
          <Grid container size={{xs:12, md:12}}>
            <Grid size={{xs:12, md:12}}>
              <TableUI lista={chocolatesFiltrador} />
            </Grid>
          </Grid>

        </Stack>

      </Grid>

    </Grid>

   
  )

}

export default App
