import { FormControl, Input, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2;';
import BackButton from '../../../components/buttons/BackButton';
import { ContentTopUpBalance } from './TopUpBalance.style';

function TopUpBalance() {
    const validateAmount = (e) => {
        e.preventDefault();
        const amount = e.target.value;
        console.log(amount);
        amount < 0 && Swal.fire('algo');
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
                    onChange={validateAmount}
                />
                <TextField placeholder="Concepto" />
            </FormControl>
        </ContentTopUpBalance>
    );
}

export default TopUpBalance;
