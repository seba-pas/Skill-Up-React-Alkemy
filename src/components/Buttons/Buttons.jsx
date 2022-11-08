import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useNewTransactionMutation } from '../../services/dataApi';
// import Stack from '@mui/material/Stack';
import { PRIVATE } from '../../router/PathUrl';

function Buttons() {
    const [newTransaction] = useNewTransactionMutation();
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
                    onClick={() => navigation(PRIVATE.topUpBalance)}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Cargar Saldo
                </Button>
                <Button
                    onClick={() => navigation(PRIVATE.bills)}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Gastos
                </Button>
                <Button
                    onClick={() => navigation(PRIVATE.transactions)}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    Movimientos
                </Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" aria-label="primary button group">
                <Button
                    onClick={async () => {
                        const result = await newTransaction({
                            accountId: 81,
                            toAccountId: 44,
                            userId: 287,
                            concept: 'anything',
                            amount: 500
                        });
                        console.log(result);
                    }}
                    size="large"
                    sx={{
                        backgroundColor: '#133fdb',
                        borderColor: 'transparent'
                    }}>
                    Press Me
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default Buttons;
