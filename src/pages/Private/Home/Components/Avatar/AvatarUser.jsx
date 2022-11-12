import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AVT from '../../../../../assets/img/avt.jpg';

import { ContentAvartarUser } from './Avatar.styles';

function AvatarUser() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState({});
    useEffect(() => {
        axios
            .get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                Swal.fire('Error de datos de usuario', err.message, 'error');
                setData({ first_name: '(Error obteniendo el nombre)' });
            });
    }, []);
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
                <span className="avatar_name f-24 fw-5">
                    {data.first_name ? data.first_name : data.last_name}
                </span>
            </div>
        </ContentAvartarUser>
    );
}

export default AvatarUser;
