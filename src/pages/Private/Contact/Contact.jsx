import { useGetMeQuery } from '../../../services/dataApi';

function Contact() {
    const [GetUser] = useGetMeQuery();
    // const id = localStorage.getItem('token');

    return <div>{GetUser} </div>;
}

export default Contact;
