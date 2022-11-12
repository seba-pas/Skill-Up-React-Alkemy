// hooks
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// components
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

// utils
import { resetUser } from '../../store/states/user';
import { PRIVATE } from '../../router/PathUrl';
// styles
import { ContentAppBar } from './Appbar.style';

function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(resetUser());
    };

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
                            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="button" onClick={handleSignOut}>
                                Cerrar Sesión
                            </button>
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
                                <ListItem button sx={{ color: 'white' }}>
                                    <Link to={PRIVATE.home} sx={{ color: 'white' }}>
                                        <ListItemText primary="Home" sx={{ color: 'white' }} />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.profile}>
                                        <ListItemText primary="Mi perfil" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.bills}>
                                        <ListItemText primary="Gastos" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.topUpBalance}>
                                        <ListItemText primary="Agregar Saldo" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.transactions}>
                                        <ListItemText primary="Movimientos" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.balance}>
                                        <ListItemText primary="Balance" />
                                    </Link>
                                </ListItem>

                                <ListItem button>
                                    <Link to={PRIVATE.contact}>
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
export default Header;
