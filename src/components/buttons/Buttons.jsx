import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';

const Buttons = () => {
    const navigation = () => {
        //aca va la funcion para navehgar
        console.log('navegando para algun lado ');
    };

    return (
        <div style={{ marginTop: '40px' }}>
            {' '}
            <ButtonGroup variant="contained" aria-label="primary button group">
                <Button
                    onClick={() => navigation()}
                    size="large"
                    sx={{ backgroundColor: '#2660a4', borderColor: 'transparent' }}>
                    Cargar Saldo
                </Button>
                <Button
                    onClick={() => navigation()}
                    size="large"
                    sx={{ backgroundColor: '#2660a4', borderColor: 'transparent' }}>
                    Gastos
                </Button>
                <Button
                    onClick={() => navigation()}
                    size="large"
                    sx={{ backgroundColor: '#2660a4', borderColor: 'transparent' }}>
                    Movimientos
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Buttons;
