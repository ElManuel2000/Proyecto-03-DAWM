import { BarChart } from "@mui/x-charts/BarChart";

interface BarChartProps {
  lista: any[];
}

function contarAños(lista: any[]) {
  let cuenta: Record<number, number> = {};
  for (let i = 0; i < lista.length; i++) {
    if (!cuenta[lista[i]]) {
      cuenta[lista[i]] = 1;
    } else {
      cuenta[lista[i]] += 1;
    }
  }
  return cuenta;
}

export default function Bar({ lista }: BarChartProps) {

  const cuenta = contarAños(lista.map((reseña) => Number(reseña['Review Date'])));

  return (
    <>
      <BarChart
        height={300}
        series={[{ data: Object.values(cuenta) }]}
        xAxis={[{ data: Object.keys(cuenta).map(Number), min: 2006, max: 2017, tickInterval: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017], tickLabelStyle: {fontSize: 9}, label: "Año" }]}
        yAxis={[{ min: 0, max: 300, tickInterval: [50,100,150,200,250,300], label: "Cantidad" }]}
      />
    </>
  );
}
