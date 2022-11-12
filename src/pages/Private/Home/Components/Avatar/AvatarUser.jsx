// hooks
import { useSelector } from 'react-redux';
// components
// assets
import AVT from '../../../../../assets/img/avt.jpg';

import { ContentAvartarUser } from './Avatar.styles';

function AvatarUser() {
    const UserState = useSelector((store) => store.user);

    function sayHi() {
        const time = new Date();
        const now = time.getHours();
        if (now >= 6 && now < 12) {
            return 'Buen día';
        }
        if (now >= 12 && now < 18) {
            return 'Buenas Tardes';
        }
        if (now >= 18 && now <= 23) {
            return 'Buenas Noches';
        }
        return 'Hola';
    }
    return (
        <ContentAvartarUser>
            <div className="avatar-user">
                <img alt="sebastian pastorenzi" src={AVT} />
            </div>

            <div className="greetings">
                <span className="greet f-14 fw-3">{sayHi()}</span>
                <span className="avatar_name f-24 fw-5">{UserState.name}</span>
            </div>
        </ContentAvartarUser>
    );
}

export default AvatarUser;
