import { LineChart } from '@mui/x-charts/LineChart';

interface ChartUIProps {
    lista : any[];
}

function aplicarFiltros(datos: any[], filtro: number) {
    return datos.filter(
    (reseña) => reseña["Review Date"] === filtro);
}

function valoresPorAño(lista: any[]) {
  let listaAños : number[] = lista.map((reseña) => Number(reseña['Review Date']));
  listaAños = [...new Set(listaAños)];
  let mapaValores: Record<number, number[]> = {};
  
  for (let i = 0; i < listaAños.length; i++) {
    mapaValores[listaAños[i]] = aplicarFiltros(lista, listaAños[i]).map((reseña) => reseña['Rating'])
  }
  return mapaValores;
}

export default function Line({ lista }: ChartUIProps) {

    const mapa = valoresPorAño(lista);

    return (
        <>
            <LineChart
                height={300}
                series={[
                    { data: Object.values(mapa).map((valores) => Math.round((valores.reduce((inicial, actual) => inicial + actual, 0) / valores.length) * 100) / 100),
                      label: "Puntaje promedio por año"
                    },
                ]}
                xAxis={[{ data: Object.keys(mapa).map(Number) , min: 2006, max:2017, tickInterval: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017], tickLabelStyle: {fontSize: 9}, label: "Año", valueFormatter: (value: number) => value.toFixed(0) }]}
                yAxis={[{ min: 0, max: 5, tickInterval: [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5], valueFormatter: (value: number) => value.toFixed(1), label: "Calificación promedio"  }]}
            />
        </>
    );
}