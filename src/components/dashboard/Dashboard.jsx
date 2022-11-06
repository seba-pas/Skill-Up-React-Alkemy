import React, { useState } from 'react';
import './dashboard.css';
import Buttons from '../buttons/Buttons';
import ButtonAppBar from '../appbar/Appbar';
// import OutlinedCard from '../saldo/Saldo';
import Saldo2 from '../saldo/Saldo2';
import AvatarUser from '../user/AvatarUser';
// import Transacciones from '../transacciones/Transacciones';

{
    /* Carga de saldo
3. Gastos
4. Balance
5. Movimientos
6. Envío de dinero */
}

export default function Dashboard() {
    const [saldo, setSaldo] = useState(0);

    return (
        <div className="general_container">
            <ButtonAppBar />

            <div style={{ marginTop: '20px' }}>
                <AvatarUser />

                <Saldo2 />
            </div>

            <div>
                <Buttons />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Transacciones />
            </div> */}
        </div>
    );
}
