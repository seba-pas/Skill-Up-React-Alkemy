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

import { Link } from 'react-router-dom';
import { PRIVATE } from '../../router/PathUrl';
import { ContentAppBar } from './Appbar.style';

export default function ButtonAppBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <ContentAppBar className="navBarDesktop">
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
                            <Link to={PRIVATE.home}>
                                {/* <Button sx={{ color: 'white' }}>Alkemy Wallet</Button> */}
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
                                    <Link to={PRIVATE.home}>
                                        <ListItemText primary="Home" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.perfil}>
                                        <ListItemText primary="Mi perfil" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.gastos}>
                                        <ListItemText primary="Gastos" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.movimientos}>
                                        <ListItemText primary="Movimientos" />
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <Link to={PRIVATE.cargarSaldo}>
                                        <ListItemText primary="Agregar Saldo" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.contacto}>
                                        <ListItemText primary="Contáctanos" />
                                    </Link>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </ContentAppBar>
    );
}
