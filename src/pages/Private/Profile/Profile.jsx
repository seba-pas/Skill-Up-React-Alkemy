// import AvatarUser from '../../../components/user/AvatarUser';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
import { ContentPerfil } from './Perfil.styles';

function Profile() {
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
