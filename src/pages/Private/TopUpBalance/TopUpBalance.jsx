import { Button, FormControl, Input, InputAdornment, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import { ContentTopUpBalance } from './TopUpBalance.style';

import BackButton from '../../../components/Buttons/BackButton';
import { useGetMeQuery } from '../../../services/dataApi';

// let { id, amount, concept } = {
//     amount: '',
//     id: '',
//     concept: ''
// };

function TopUpBalance() {
    // const [depositCash] = useDepositCashMutation;
    const getMeQuery = useGetMeQuery();
    const [amount, setAmount] = useState();
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
    // const validateAmount = (e) => {
    //     e.preventDefault();
    //     const tempAmount = e.target.value;
    //     if (tempAmount < 0) {
    //         Swal.fire('Ingrese un valor mayor que 0');
    //         return false;
    //     }
    //     setAmount(tempAmount);
    //     return true;
    // };
    const handleClick = () => {
        console.log(data);
        // logica para ingresar el id de cuenta y hacer el deposito
        // depositCash(id, concept, amount);
    };
    // const HandleConcept = (e) => {
    //     concept = e.target.value;
    //     return concept;
    // };
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
                <TextField placeholder="Concepto" />
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
