import { useState } from 'react';
import { Grid, Card, Stack, Button, Drawer, Box } from '@mui/material'
import FiltroLugar from './components/Filtro'
import IndicatorUI from './components/Indicador'
import TableUI from './components/Tabla'
import './App.css'
import Boton from './components/BotonDescarga';
import Scatter from './components/GDispersion';
import Bar from './components/GBarras';
import Line from './components/GLineas';
import Header from './components/Encabezado';
import useFetchData from './hooks/useFetchData';
import Typography from '@mui/material/Typography';

function App() {

  const chocolates = useFetchData();

  const [selectedCLocation, setSelectedCLocation] = useState('');

  const [selectedBType, setSelectedBType] = useState('');

  const [selectedBBOrigin, setSelectedBBOrigin] = useState('');

  function aplicarFiltros(datos: any[], selectedOption1: string, selectedOption2: string, selectedOption3: string) {
    return datos.filter(reseña => selectedOption1 ? reseña['Company Location'] == selectedOption1 : true)
    .filter(reseña => selectedOption2 ? reseña['Bean Type'] == selectedOption2 : true)
    .filter(reseña => selectedOption3 ? reseña['Broad Bean Origin'] == selectedOption3 : true)
  }

  const chocolatesFiltrador = aplicarFiltros(chocolates, selectedCLocation, selectedBType, selectedBBOrigin);

  {/* Componentes para barra lateral */}
  const [open, setOpen] = useState(false);

      const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };
  
  return (
    
    <Grid container spacing={2} sx={{justifyContent:"center", alignItems:"center"}}>

      {/* Barra lateral con filtros */}
      <Grid size={{xs:12, md:3}} sx={{display: { xs: 'none', md: 'block' }, padding:2}}>

        <Typography variant="h5" component="div" sx={{textAlign: "left"}}>Filtros</Typography>

        <br/>

        <FiltroLugar onOptionSelect={setSelectedCLocation} opciones={chocolates} parametro='Company Location' />

        <FiltroLugar onOptionSelect={setSelectedBType} opciones={chocolates} parametro='Bean Type' />

        <FiltroLugar onOptionSelect={setSelectedBBOrigin} opciones={chocolates} parametro='Broad Bean Origin' />

      </Grid>

      <Grid size={{xs:12, md:12}} sx={{display: { xs: 'block', md: 'none' }}}>
        <Button variant="outlined" color="success" onClick={toggleDrawer(true)}>☰</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ height: '100%', width: 250, padding: 2, alignItems:"center" }}>
                
                <Typography variant="h5" component="div" sx={{textAlign: "left"}}>Filtros</Typography>

                <br/>

                <FiltroLugar onOptionSelect={setSelectedCLocation} opciones={chocolates} parametro='Company Location' />

                <FiltroLugar onOptionSelect={setSelectedBType} opciones={chocolates} parametro='Bean Type' />

                <FiltroLugar onOptionSelect={setSelectedBBOrigin} opciones={chocolates} parametro='Broad Bean Origin' />

            </Box>
        </Drawer>
      </Grid>

      {/* Main */}
      <Grid size={{xs:12, md:9}} sx={{backgroundColor: "lightgray"}}>

        <Stack spacing={2}>
        
          {/* Encabezado */}
          <Grid container size={{xs:12, md:12}}>
            
            {/* Titulo de la pagina */}
            <Grid size={{xs:12, md:9}}>
              <Card>
                <Header />
              </Card>
            </Grid>

            {/* Botón de descarga */}
            <Grid size={{xs:12, md:3}}>
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
