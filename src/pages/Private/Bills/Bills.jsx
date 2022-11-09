import { useState } from 'react';
import { FormLabel, Input, TextField } from '@mui/material';
import { ContentBills } from './Bills.styles';
import { useNewExpenseMutation } from '../../../services/dataApi';

function Bills() {
    const [amount, setAmount] = useState(0);
    const [concept, setConcept] = useState('');
    const newExpense = useNewExpenseMutation();
    // implementación de lógica para obtener el id de cuenta
    function handleSubmit(e) {
        e.preventDefault();
        const id = 287;
        const res = async () => {
            newExpense(id, concept, amount);
        };
        console.log(res);
    }

    return (
        <ContentBills>
            <div className="top d-flex between">
                <h1 className="label"> Cargar un gasto</h1>
            </div>

            <div className="card">
                <form className="d-flex-column billsForm">
                    <FormLabel>Monto: $</FormLabel>
                    <Input
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="0.00"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <FormLabel>Concepto:</FormLabel>
                    <TextField
                        className="form-control"
                        aria-label="With textarea"
                        onChange={(e) => setConcept(e.target.value)}
                    />
                    <button type="submit" className="btn billSubmit" onClick={handleSubmit}>
                        Cargar gasto
                    </button>
                </form>
            </div>
        </ContentBills>
    );
}

export default Bills;
