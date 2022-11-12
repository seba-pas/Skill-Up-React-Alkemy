import { useState } from 'react';
import Swal from 'sweetalert2';
import { ContentTopUpBalance } from './TopUpBalance.style';
import { useDepositCashMutation } from '../../../services/dataApi.js';

function TopUpBalance() {
    const [amount, setAmount] = useState(0);
    const [concept, setConcept] = useState('');
    const [accountId, setAccountId] = useState('');
    const [newDeposit] = useDepositCashMutation();

    function handleSubmit(e) {
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
        newDeposit({ id: accountId, concept, amount })
            .unwrap()
            .then((fulfilled) => {
                switch (fulfilled.status) {
                    case 404:
                        Swal.fire('', fulfilled.error, 'error');
                        break;
                    case 200:
                        Swal.fire('', fulfilled.error, 'success');
                        break;
                    default:
                        break;
                }
            })
            .catch((rejected) => Swal.fire('', rejected.error, 'error'));
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
