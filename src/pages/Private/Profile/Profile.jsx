// import AvatarUser from '../../../components/user/AvatarUser';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
import { ContentPerfil } from './Perfil.styles';
import { useGetMeQuery } from '../../../services/dataApi';

function Profile() {
    const { data, isLoading, isError, error, isSuccess } = useGetMeQuery();

    console.log(data, isLoading, isError, error, isSuccess);

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
