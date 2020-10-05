import React from 'react'
import './Input.css'

const Input = (props) => {
    console.log(props);
    let inputElement;
    let styleClases = ['InputElement'];

    if (!props.valid && props.shouldValidate && props.touched) {
        styleClases.push('Invalid');
    }


    switch (props.elementType) {
        case 'input':
            inputElement = <input
                className={styleClases.join(' ')}
                {...props.attributes}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'textArea':
            inputElement = <textarea
                className={styleClases.join(' ')}
                {...props.attributes}
                value={props.value}
                onChange={props.changed} />
            break;
        case 'select':
            inputElement = (
                <select
                    className={styleClases.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.attributes.options.map(opt => (
                        <option
                            key={opt.id}
                            value={opt.value}
                        >
                            {opt.label}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={styleClases.join(' ')}
                {...props.attributes}
                value={props.value}
                onChange={props.changed} />
            break;
    }


    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input
