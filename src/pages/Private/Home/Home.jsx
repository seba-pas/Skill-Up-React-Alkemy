// hooks
import React from 'react';
// components
import Buttons from '../../../components/buttons/Buttons';
import ButtonAppBar from '../../../components/appbar/Appbar';
import Saldo2 from '../../../components/saldo/Saldo2';
import AvatarUser from '../../../components/user/AvatarUser';
// styles
import { ContentHome } from './Home.styles.';
import { useGetAccountQuery } from '../../../store/services/dataApi';

export default function Home() {
    // const [saldo, setSaldo] = useState(0);

    // al loggearse chequeamos si tiene cuenta asociada, de no tener se dirige al usuario a una pagina donde crea su nueva cuenta, solo se le dice con cuanto dinero comienza y de ahi ya se asigna la cuenta nueva, la proxima vez va a detectar que tiene cuenta nueva y no va a esa pagina

    const { data, isLoading } = useGetAccountQuery();

    if (isLoading) {
        return <p>Loading</p>;
    }

    console.log(data);

    return (
        <ContentHome style={{ background: 'transparent', height: '100vh' }}>
            <div className="circle" />
            <ButtonAppBar />

            <div style={{ marginTop: '100px' }}>
                <AvatarUser />

                <Saldo2 />
            </div>
            <div className="circle2" />

            <div>
                <Buttons />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Transacciones />
            </div> */}
        </ContentHome>
    );
}
