import { ContentAdornos } from './Adornos.style';

export default function Adornos({ children }) {
    return (
        <ContentAdornos>
            <div className="circle" />
            <div className="circle2" />
            {children}
        </ContentAdornos>
    );
}
