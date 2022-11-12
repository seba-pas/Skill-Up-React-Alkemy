// import AvatarUser from '../../../components/user/AvatarUser';
import LogoutButton from '../../../components/Buttons/Logout';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
import { ContentPerfil } from './Perfil.styles';

function Profile() {
    return (
        <ContentPerfil>
            <DecorationLayout>
                {/* <AvatarUser /> */}
                <div>Perfil de usuario</div>
                <LogoutButton />
            </DecorationLayout>
        </ContentPerfil>
    );
}

export default Profile;
