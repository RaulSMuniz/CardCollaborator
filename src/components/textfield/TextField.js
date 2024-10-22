import './TextField.css'

const TextField = (props) => {
    
    const modifiedLabel = `${props.label}`
    const modifiedPlaceholder = `${props.placeholder}...`

    return (
        <div className="text-field">
            {props.h1}
            <label>{modifiedLabel}</label>
            <input placeholder={modifiedPlaceholder}/>
        </div>
    )
};

export default TextField;
