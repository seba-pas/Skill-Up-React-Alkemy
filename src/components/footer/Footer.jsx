import { AppBar, Box, Chip, Toolbar } from '@mui/material';
import { ContentFooter } from './Footer.styles.js';

export default function Footer() {
    return (
        <ContentFooter>
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
        </ContentFooter>
    );
}
