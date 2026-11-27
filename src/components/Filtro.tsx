import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface SelectorProps {
    onOptionSelect: (option: string) => void,
    opciones: any[],
    parametro: string;
}

export default function FiltroLugar({ onOptionSelect, opciones, parametro }: SelectorProps) {

    const [lugarInput, setlugarInput] = useState('');
    
    const handleChange = (event: SelectChangeEvent<string>) => {
        const lugar = event.target.value;
        setlugarInput(lugar);
        onOptionSelect(lugar);
    };
    
    let lista_opciones = opciones.map((opcion) => opcion[parametro])
    lista_opciones = [... new Set(lista_opciones)]

    return (
        <FormControl fullWidth>
            <InputLabel id="select-label">Seleccione un {parametro}</InputLabel>
            <Select
                labelId="select-label"
                id="simple-select"
                label={"Seleccione un "+parametro}
                value = {lugarInput}
                onChange={handleChange}>
                <MenuItem disabled><em>Seleccione un {parametro}</em></MenuItem>
                <MenuItem value={''}>Quitar filtro</MenuItem>
                {lista_opciones.map((opcion) => <MenuItem value={opcion}>{opcion}</MenuItem>)}
            </Select>

            {lugarInput ?
            (
                <>
                <p>
                    Información del lugar <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{lugarInput}</span>
                </p>
                <p><br/></p>
                </>
            )
            :
            (
                <p><br/><br/></p>
            )}

        </FormControl>
    );
}