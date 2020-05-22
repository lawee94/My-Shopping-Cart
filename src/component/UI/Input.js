import React from 'react';

const input = ( props ) => {
    let inputElement = null;
    
    let inputClasses = "inlineBlock InputElement"
    let inputClas = "Input";
    
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses = "inlineBlock InputElement Invalid";
    }

    if(props.display === 'block'){
        inputClas = "Input blocks"
    }
    if(props.display === 'inline-block'){
        inputClas = "Input inlineBlock"
    }    


    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses}
                {...props.elementConfig}
                width='250px'
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
            className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                className={inputClasses.concat(' col-3')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.options.map(option => (
                        <option key={option.value} value={option.value} >
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
            className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={inputClas}>
            <label className=''><h5>{props.label}</h5></label>
            {inputElement}
        </div>
    );

};

export default input;