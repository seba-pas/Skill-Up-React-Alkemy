import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useGetTransactionsQuery } from '../../store/services/dataApi';
// import Stack from '@mui/material/Stack';

export default function Buttons() {
    const [page, setPage] = useState(1);

    const { data } = useGetTransactionsQuery(page);

    const navigation = () => {
        // //aca va la funcion para navehgar
        console.log('navegando para algun lado ');
    };

    console.log(data);

    return (
        <div style={{ marginTop: '40px' }}>
            {' '}
            <ButtonGroup variant="contained" aria-label="primary button group">
                <Button
                    onClick={() => navigation()}
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
                <Button
                    onClick={() => {
                        setPage((prevState) => (prevState > 1 ? prevState - 1 : prevState));
                    }}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    PrevPage
                </Button>
                <Button
                    onClick={async () => {
                        setPage((prevState) => (data.nextPage ? prevState + 1 : prevState));
                    }}
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}>
                    NextPage
                </Button>
            </ButtonGroup>
        </div>
    );
}
