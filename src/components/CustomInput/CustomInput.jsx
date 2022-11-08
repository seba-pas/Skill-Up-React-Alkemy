import { ContentCustomInput } from './CustomInput.styles';

function CustomInput({ name, placeholder, label, type = 'text', onChange, value }) {
    return (
        <ContentCustomInput>
            <label htmlFor={name}>
                <input
                    type={type}
                    className="input"
                    name={name}
                    id={name}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                />
                <span className="label">{label}</span>
            </label>
        </ContentCustomInput>
    );
}

export default CustomInput;
