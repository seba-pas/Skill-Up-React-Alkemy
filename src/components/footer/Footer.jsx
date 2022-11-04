import { AppBar, Box, Chip, Toolbar } from '@mui/material';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <Box>
                <AppBar
                    position="fixed"
                    sx={{ top: 'auto', bottom: 0, backgroundColor: '#2660A4' }}>
                    <Toolbar className="toolbarFooter">
                        <Chip
                            label="Sitio desarrollado por Grupo 3 de Alkymers. 2022"
                            variant="outlined"
                            className="chipFooter"
                        />
                    </Toolbar>
                </AppBar>
            </Box>
        </footer>
    );
}
