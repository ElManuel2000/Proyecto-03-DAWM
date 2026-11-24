import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <Typography
            variant= 'h2'
            component= 'h1'
            sx={{ fontWeight:'bold' }}>
            Dashboard chocolates
        </Typography>
    );
}