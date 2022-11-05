import { AlertTitle, Container, Fade } from '@mui/material';
import NotFoundBack from '../../assets/img/404-error.webp';

export default function Notfound() {
    return (
        <div className="general_container" style={{ background: 'transparent', height: '100vh' }}>
            <div style={{ marginTop: '100px' }} />
            <div className="circle2" />
            <Container>
                <Fade in>
                    <img
                        src={NotFoundBack}
                        style={{
                            width: '100%',
                            height: '100%',
                            zIndex: -10,
                            borderRadius: '40px'
                        }}
                        alt="Imagen de página no encontrada"
                    />
                </Fade>
                <Fade in>
                    <AlertTitle sx={{ fontSize: 30, textAlign: 'center' }}>
                        Page not found
                    </AlertTitle>
                </Fade>
            </Container>
        </div>
    );
}
