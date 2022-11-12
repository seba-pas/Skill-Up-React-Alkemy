// hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// compontents
import { FormLabel, Input, TextField } from '@mui/material';
import balanceSucces from './components/PaymentSucces';
// utils
import { useNewExpenseMutation } from '../../../services/dataApi';

import { ContentBalance } from './Payment.styles';

function Balance() {
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [concept, setConcept] = useState('');
    const [newExpense, { error, isSuccess, isError }] = useNewExpenseMutation();
    function goBack() {
        navigate('/');
    }
    useEffect(() => {
        if (amount < 0) {
            Swal.fire('', 'Debe ingresar un número positivo', 'error');
        }
        if (amount !== '') {
            setAmount(Number(amount));
        }
    }, [amount]);
    useEffect(() => {
        if (isSuccess) {
            setAmount('');
            setConcept('');
            balanceSucces(goBack);
        }
    }, [isSuccess]);
    useEffect(() => {
        if (isError) {
            setAmount('');
            setConcept('');
            const { data } = error;
            Swal.fire('', data.error, 'error');
        }
    }, [isError]);

    async function handleSubmit(e) {
        e.preventDefault();
        const id = 1298; // acá falta la lógica para traer el id de cuenta
        if (amount === '') {
            Swal.fire('', 'Debe ingresar un valor', 'error');
            return;
        }
        await newExpense({ id, amount, concept }).unwrap();
    }

    return (
        <ContentBalance>
            <div className="top d-flex between">
                <h4 className="f-18"> Cargar un gasto</h4>
            </div>

            <div className="card">
                <form className="d-flex-column billsForm">
                    <FormLabel>Monto:</FormLabel>
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        value={amount}
                        placeholder="$ 0.00"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <FormLabel>Concepto:</FormLabel>
                    <TextField
                        aria-label="With textarea"
                        value={concept}
                        onChange={(e) => setConcept(e.target.value)}
                    />
                    <button type="submit" className="btn primary" onClick={handleSubmit}>
                        Cargar gasto
                    </button>
                </form>
            </div>
        </ContentBalance>
    );
}

export default Balance;
