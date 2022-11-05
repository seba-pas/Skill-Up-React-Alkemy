/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-duplicates
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-unresolved

function Users() {


    // eslint-disable-next-line no-undef
    axios
        .get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users')
        .then((resp) => {
            console.log(resp)
        })
        .catch((error) => console.log(error));

    return <>
    </>;
}

export default Users;
