import React from 'react';
import AVT from '../../../../../assets/img/avt.jpg';

import { ContentAvartarUser } from './Avatar.styles';

function AvatarUser() {
    return (
        <ContentAvartarUser>
            <div className="avatar-user">
                <img alt="sebastian pastorenzi" src={AVT} />
            </div>

            <div className="greetings">
                <span className="greet f-14 fw-3">Buen dia</span>
                <span className="avatar_name f-24 fw-5">Sebastian</span>
            </div>
        </ContentAvartarUser>
    );
}

export default AvatarUser;
