import { useState } from 'react';
import Swal from 'sweetalert2';
import { ContentTopUpBalance } from './TopUpBalance.style';
import { useDepositCashMutation } from '../../../services/dataApi.js';

function TopUpBalance() {
    const [amount, setAmount] = useState(0);
    const [concept, setConcept] = useState('');
    const [accountId, setAccountId] = useState('');
    const [newDeposit, result] = useDepositCashMutation();

    async function handleSubmit(e) {
        e.preventDefault();

        if (amount <= 0) {
            Swal.fire('', 'Debe ingresar un número positivo', 'error');
            return;
        }
        if (!accountId) {
            Swal.fire('', 'Por favor ingrese un numero de cuenta', 'error');
            return;
        }
        if (!concept) {
            Swal.fire('', 'Por favor ingrese un concepto de carga', 'error');
            return;
        }
        try {
            await newDeposit({ id: accountId, concept, amount });

            if (result.status === 'rejected') {
                Swal.fire('', 'La cuenta no existe', 'error');
                return;
            }
            Swal.fire('', 'Saldo cargado exitosamente', 'success');
        } catch (error) {
            Swal.fire('', 'No pudo realizarse la carga', 'error');
        }
    }

    return (
        <ContentTopUpBalance>
            <div>
                <form>
                    <input
                        type="number"
                        name="accountId"
                        id="accountId"
                        value={accountId}
                        placeholder="ingrese el id de la cuenta"
                        onChange={(e) => setAccountId(e.target.value)}
                    />
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        value={amount}
                        placeholder="$ 0.00"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <input
                        type="text"
                        name="concept"
                        id="concept"
                        value={concept}
                        placeholder="Concepto de carga"
                        onChange={(e) => setConcept(e.target.value)}
                    />
                </form>
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Cargar Saldo
                </button>
            </div>
        </ContentTopUpBalance>
    );
}

export default TopUpBalance;
