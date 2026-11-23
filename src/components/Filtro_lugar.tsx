import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface SelectorProps {
    onOptionSelect: (option: string) => void;
}

export default function FiltroLugar({ onOptionSelect }: SelectorProps) {

    const [lugarInput, setlugarInput] = useState('');
    
    const handleChange = (event: SelectChangeEvent<string>) => {
        const lugar = event.target.value;
        setlugarInput(lugar);
        onOptionSelect(lugar);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="city-select-label">CompanyLocation</InputLabel>
            <Select
                labelId="city-select-label"
                id="city-simple-select"
                label="CompanyLocation"
                value = {lugarInput}
                onChange={handleChange}>
                <MenuItem disabled><em>Seleccione un lugar</em></MenuItem>
                <MenuItem value={''}>Quitar filtro</MenuItem>
                <MenuItem value={'U.S.A.'}>Estados Unidos.</MenuItem>
                <MenuItem value={'France'}>France</MenuItem>
                <MenuItem value={'U.K.'}>U.K.</MenuItem>
                <MenuItem value={'Italy'}>Italy</MenuItem>
            </Select>

            {lugarInput && (
                <p>
                    Información del lugar <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{lugarInput}</span>
                </p>
            )}

        </FormControl>
    );
}