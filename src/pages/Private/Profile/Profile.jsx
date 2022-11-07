import AvatarUser from '../../../components/user/AvatarUser';
import Adornos from '../../../layout/PrivateLayout/Adornos/Adornos';
import { ContentPerfil } from './Perfil.styles';

function Profile() {
    return (
        <ContentPerfil>
            <Adornos>
                <AvatarUser />
                <div>Perfil de usuario</div>
            </Adornos>
        </ContentPerfil>
    );
}

export default Profile;
