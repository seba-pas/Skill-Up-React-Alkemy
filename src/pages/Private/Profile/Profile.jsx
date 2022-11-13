// import AvatarUser from '../../../components/user/AvatarUser';
import { useSelector } from 'react-redux';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
import { ContentPerfil } from './Perfil.styles';

function Profile() {
    const UserState = useSelector((store) => store.user);
    console.log(UserState);

    return (
        <ContentPerfil>
            <DecorationLayout>
                {/* <AvatarUser /> */}
                <div>Perfil de usuario</div>
            </DecorationLayout>
        </ContentPerfil>
    );
}

export default Profile;
