import { AlertTitle, Button, Container, Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import NotFoundBack from '../../assets/img/404-error.webp';
import { ContentAdornos } from '../../layout/PrivateLayout/Adornos/Adornos.style';
import { PRIVATE } from '../../router/PathUrl';
import { ContentNotFound, LinkNotFound } from './NotFound.styles';

export default function NotfoundDesktop() {
    return (
        <ContentNotFound className="general_container">
            <div style={{ marginTop: '100px' }} />
            <ContentAdornos>
                <Container>
                    <Fade in>
                        <img src={NotFoundBack} alt="Imagen de página no encontrada" />
                    </Fade>
                    <Fade in>
                        <AlertTitle sx={{ fontSize: 30, textAlign: 'center' }}>
                            Page not found
                        </AlertTitle>
                    </Fade>
                    <Fade in>
                        <LinkNotFound>
                            <Link to={PRIVATE.home}>
                                <Button>Volver al home</Button>
                            </Link>
                        </LinkNotFound>
                    </Fade>
                </Container>
            </ContentAdornos>
        </ContentNotFound>
    );
}
