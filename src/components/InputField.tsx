
type InputFieldProps = {
    label: string,
    type: string,
    placeholder: string ,
    name: string
}

const InputField = ({label,type,placeholder,name}:InputFieldProps) => {
    return (
        <>
            <label>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={`field_${name}`}
            >
            </input> 
        </>
    )
}

export default InputField