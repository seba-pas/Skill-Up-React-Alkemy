import React from 'react';
import AVT from '../../assets/img/avt.jpg';
import Avatar from '@mui/material/Avatar';
import './avatar.css';

const AvatarUser = () => {
    return (
        <div className="head_container">
            <div className="avatar_container">
                <Avatar
                    alt="sebastian pastorenzi"
                    src={AVT}
                    sx={{
                        width: 67,
                        height: 67,
                        border: 3,
                        
                        borderColor: 'transparent',
                        background:
                            'linear-gradient(93.46deg, #133FDB 0%, rgba(183, 0, 77, 0.7) 103.75%)'
                    }}
                />

                <div className="greetings">
                    <span className="greet">Buen dia</span>
                    <span className="avatar_name">Sebastian</span>
                </div>
            </div>
        </div>
    );
};

export default AvatarUser;
