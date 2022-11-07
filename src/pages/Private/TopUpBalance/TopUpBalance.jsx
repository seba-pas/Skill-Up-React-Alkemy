import { Button, FormControl, Input, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BackButton from '../../../components/buttons/BackButton';
import { ContentTopUpBalance } from './TopUpBalance.style';
import {
    // useDepositCashMutation,
    useGetMeQuery
} from '../../../store/services/dataApi';

let { id, amount, concept } = {
    amount: '',
    id: '',
    concept: ''
};

function TopUpBalance() {
    // const [depositCash] = useDepositCashMutation();

    function cargarDatos() {
        const temp = useGetMeQuery().data;
        return temp;
    }
    const data = cargarDatos();
    const validateAmount = (e) => {
        e.preventDefault();
        const tempAmount = e.target.value;
        if (tempAmount < 0) {
            Swal.fire('Ingrese un valor mayor que 0');
            return 0;
        }
        amount = tempAmount;
        return amount;
    };
    const handleClick = () => {
        id = data.id;
        console.log(id);
        // logica para ingresar el id de cuenta y hacer el deposito
        // depositCash(id, concept, amount);
    };
    const HandleConcept = (e) => {
        concept = e.target.value;
        return concept;
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
                <TextField placeholder="Concepto" onChange={HandleConcept} />
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
