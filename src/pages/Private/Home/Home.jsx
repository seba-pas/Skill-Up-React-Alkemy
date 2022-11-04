// hooks
import React from 'react';
// components
import Buttons from '../../../components/buttons/Buttons';
import ButtonAppBar from '../../../components/appbar/Appbar';
import Saldo2 from '../../../components/saldo/Saldo2';
import AvatarUser from '../../../components/user/AvatarUser';
// styles
import { ContentHome } from './Home.styles.';
import Footer from '../../../components/footer/Footer';

export default function Home() {
    // const [saldo, setSaldo] = useState(0);

    return (
        <ContentHome style={{ background: 'transparent', height: '100vh' }}>
            <div className="circle" />
            <ButtonAppBar />

            <div style={{ marginTop: '100px', padding: '2rem' }}>
                <AvatarUser />

                <Saldo2 />
            </div>
            <div className="circle2" />

            <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                <Buttons />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Transacciones />
            </div> */}
            <Footer />
        </ContentHome>
    );
}
