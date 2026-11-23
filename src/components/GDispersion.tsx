import { ScatterChart } from "@mui/x-charts/ScatterChart";

interface ScatterChartProps {
    lista : any[];
}

export default function Scatter({ lista }: ScatterChartProps) {
    return (
      <>
        <ScatterChart
          height={300}
          series={[
            {
              label: "Relación entre Puntaje y Porcentaje de Cacao",
              data: lista.map((reseña, indice) => ({ x: reseña['Rating'], y: Number(reseña['Cocoa Percent'].replace("%","")), id: indice })),
            }
          ]}
          xAxis={[{ min: 0, max: 5, tickInterval: [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5], valueFormatter: (value: number) => value.toFixed(1), label: "Calificación" }]}
          yAxis={[{ min: 0, max: 100, tickInterval: [0,10,20,30,40,50,60,70,80,90,100], label: "Porcentaje de Cacao" }]}
        />
      </>
    );
}


