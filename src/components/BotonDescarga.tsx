import { Button } from '@mui/material'

interface BotonProps {
    texto: string,
}

export default function Boton({ texto }: BotonProps) {

    return(
        <Button variant="contained" color="success" href="files/flavors_of_cacao.json" download="flavors_of_cacao.json">
            {texto}
        </Button>
    )

}

