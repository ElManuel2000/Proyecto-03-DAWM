import { Grid, Card, Stack } from '@mui/material'
import './App.css'

function App() {
  
  return (
    
    <Grid container spacing={2} sx={{justifyContent:"center", alignItems:"center"}}>

      {/* Barra lateral con filtros */}
      <Grid size={{xs:12, md:3}} sx={{display: { xs: 'none', md: 'block' }, backgroundColor: "red"}}>
        <Card>Filtros feos</Card>
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
              <Card>Botón de descarga</Card>
            </Grid>

          </Grid>

          {/* Indicadores */}
          <Grid container size={{xs:12, md:12}}>
            
            <Grid size={{xs:12, md:4}}>
              <Card>Indicador 1</Card>
            </Grid>

            <Grid size={{xs:12, md:4}}>
              <Card>Indicador 2</Card>
            </Grid>

            <Grid size={{xs:12, md:4}}>
              <Card>Indicador 3</Card>
            </Grid>

          </Grid>

          {/* Gráficos */}
          <Grid container size={{xs:12, md:12}} sx={{justifyContent:"center", alignItems:"center"}}>

            {/* Primeros gráficos */}
            <Grid container size={{xs:12, md:6}}>
              
              <Grid size={{xs:12, md:12}}>
                <Card>Gráfico 1</Card>
              </Grid>

            </Grid>

            {/* Segundos gráficos */}
            <Grid container size={{xs:12, md:6}}>
              <Grid size={{xs:12, md:12}}>
                <Card>Gráfico 2</Card>
              </Grid>
              <Grid size={{xs:12, md:12}}>
                <Card>Gráfico 3</Card>
              </Grid>
            </Grid>

          </Grid>

          {/* Tabla */}
          <Grid container size={{xs:12, md:12}}>
            <Grid size={{xs:12, md:12}}>
              <Card>Tabla</Card>
            </Grid>
          </Grid>

        </Stack>

      </Grid>

    </Grid>

   
  )

}

export default App
