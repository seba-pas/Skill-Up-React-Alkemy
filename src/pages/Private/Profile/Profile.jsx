// import AvatarUser from '../../../components/user/AvatarUser';
// import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useGetMeQuery, useGetAccountQuery } from '../../../services/dataApi.js';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
import AvatarUser from '../Home/Components/Avatar/AvatarUser';
import { ContentPerfil } from './Perfil.styles';

function Profile() {
    // const UserState = useSelector((store) => store.user);

    const resultMe = useGetMeQuery();
    const resultAccount = useGetAccountQuery();

    let UserState;
    let AccountState;
    let content;
    console.log(resultAccount);

    if (resultMe.isSuccess && resultAccount.isSuccess) {
        UserState = resultMe;
        AccountState = resultAccount;
        content = (
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" color="white">
                        Account ID : {AccountState.data[0].id}
                    </Typography>
                    <Typography variant="h5" color="white">
                        Money: ${AccountState.data[0].money}
                    </Typography>
                    <Typography variant="h5" color="white">
                        Points: {UserState.data.points}
                    </Typography>
                </CardContent>
            </CardActionArea>
        );
    }

    return (
        <ContentPerfil>
            <DecorationLayout>
                {/* <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                    <h1>Account ID : {UserState.account_id}</h1>
                    <h1>Money: ${UserState.money}</h1>
                    <h1>Points: {UserState.points}</h1>
                </div> */}
                <AvatarUser />

                <Card className="card">{content}</Card>
            </DecorationLayout>
        </ContentPerfil>
    );
}

export default Profile;
