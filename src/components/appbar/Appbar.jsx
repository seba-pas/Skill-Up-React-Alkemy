import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

export default function ButtonAppBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <div style={{ marginBottom: '40px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#2660A4' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setIsDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            style={{ marginLeft: '-40px' }}
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            Alkemy Wallet
                        </Typography>
                        <Drawer
                            style={{ height: '60vh', width: '50vw' }}
                            open={isDrawerOpen}
                            onClose={() => setIsDrawerOpen(false)}>
                            <List
                                style={{
                                    fontSize: '30px',
                                    fontWeight: '600',
                                    height: '100vh',
                                    backgroundColor: '#2660A4',
                                    color: 'white'
                                }}>
                                <ListItem button>
                                    <ListItemText primary="Home" />
                                </ListItem>

                                <ListItem button>
                                    <ListItemText primary="Mi Perfil" />
                                </ListItem>

                                <ListItem button>
                                    <ListItemText primary="Gastos" />
                                </ListItem>

                                <ListItem button>
                                    <ListItemText primary="Movimientos" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText primary="Agregar Saldo" />
                                </ListItem>

                                <ListItem button>
                                    <ListItemText primary="Contactanos" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
