import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Link } from '@mui/material';
import { PRIVATE } from '../../router/PathUrl';

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
                            style={{ padding: '1px' }}
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            <Link href="/" underline="none" color="white">
                                Alkemy Wallet
                            </Link>
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
                                    <Link href="/" underline="none" color="white">
                                        <ListItemText primary="Home" />
                                    </Link>
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
                                    <Link href={PRIVATE.cargarSaldo} underline="none" color="white">
                                        <ListItemText primary="Agregar Saldo" />
                                    </Link>
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
