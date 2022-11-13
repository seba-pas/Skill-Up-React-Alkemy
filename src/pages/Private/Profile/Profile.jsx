// import AvatarUser from '../../../components/user/AvatarUser';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
import AvatarUser from '../Home/Components/Avatar/AvatarUser';
import { ContentPerfil } from './Perfil.styles';

function Profile() {
    const UserState = useSelector((store) => store.user);
    console.log(UserState);

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

                <Card className="card">
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h5" color="white">
                                Account ID : {UserState.account_id}
                            </Typography>
                            <Typography variant="h5" color="white">
                                Money: ${UserState.money}
                            </Typography>
                            <Typography variant="h5" color="white">
                                Points: {UserState.points}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </DecorationLayout>
        </ContentPerfil>
    );
}

export default Profile;
