import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { PRIVATE } from '../../router/PathUrl';

function Buttons() {
    const navigate = useNavigate();
    const navigation = (url) => {
        // aca va la funcion para navehgar
        navigate(url);
    };

    return (
        <div style={{ marginTop: '40px' }}>
            {' '}
            <ButtonGroup variant="contained" aria-label="primary button group">
                <Button
                    onClick={() => navigation(PRIVATE.cargarSaldo)}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Cargar Saldo
                </Button>
                <Button
                    onClick={() => navigation()}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Gastos
                </Button>
                <Button
                    onClick={() => navigation()}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Movimientos
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default Buttons;
