import { useState } from 'react';
import './TextField.css'

const TextField = (props) => {

    const modifiedLabel = `${props.label}`;
    const modifiedPlaceholder = `${props.placeholder}...`;

    const onType = (event) => {
        props.onChanges(event.target.value);
    };

    return (
        <div className="text-field">
            {props.h1}
            <label>{modifiedLabel}</label>
            <input value={props.valor} onChange={onType} required={props.notnull} placeholder={modifiedPlaceholder} />
        </div>
    );
};

export default TextField;
