// hooks
import React, { useState, useEffect } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button, FormControl, Input, InputAdornment, TextField } from '@mui/material';
import Swal from 'sweetalert2';
import { useGetMeQuery } from '../../../services/dataApi';
// components
import BackButton from '../../../components/Buttons/BackButton';
// style
import { ContentTopUpBalance } from './TopUpBalance.style';

function TopUpBalance() {
    // const [depositCash] = useDepositCashMutation;
    const getMeQuery = useGetMeQuery();
    const [amount, setAmount] = useState();
    const [concept, setConcept] = useState();
    const [data, setData] = useState();
    useEffect(() => {
        const temp = getMeQuery.data;
        setData(temp);
    }, [getMeQuery]);
    useEffect(() => {
        if (amount < 0) {
            Swal.fire('', 'Ingrese un valor mayor que 0', 'warning');
        }
    }, [amount]);

    const handleClick = () => {
        console.log(data);
        console.log(amount);
        console.log(concept);
        // logica para ingresar el id de cuenta y hacer el deposito
        // depositCash(id, concept, amount);
    };
    return (
        <ContentTopUpBalance>
            <div className="backButtonContainer">
                <BackButton />
            </div>
            <FormControl className="topUpForm">
                <h2>Cargar Saldo:</h2>
                <Input
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    type="number"
                    name="amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <TextField placeholder="Concepto" onChange={(e) => setConcept(e.target.value)} />
                <Button
                    onClick={() => handleClick()}
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent', color: 'white' }}>
                    Cargar <AttachMoneyIcon />
                </Button>
            </FormControl>
        </ContentTopUpBalance>
    );
}

export default TopUpBalance;
