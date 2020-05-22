import React from 'react';
import Input from '../../component/UI/Input'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const getArrayFromState = (myState) => {
    const selArray = []
    for(let key in myState){
        selArray.push({
            id: key, config:myState[key]
        })
    }
    return selArray
}

export const inputHandler = (event, inputIdentifier, myState, ntEventValue) => {
    const updatedInput = {...myState}
    const inpElement = updatedInput[inputIdentifier]
    try {
        const val = ntEventValue ? ntEventValue.toString() : event.target.value
        inpElement.value = val
        const isvalid = ntEventValue === ' ' && event === '' ? true : checkValidity(val, myState[inputIdentifier].validation)
        inpElement.valid = isvalid
        inpElement.touched = true
        updatedInput[inputIdentifier] = inpElement
    } catch (error) {   }
    return updatedInput
}

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    return isValid;
}

export const InputElement = (elemType, type, placeholder, validation, label, options) => {
    const element = {
        elementType: elemType,
        elementConfig:{ placeholder: placeholder, type: type},
        options: options,
        value: '',
        validation: validation,
        valid: false,
        touched: false,
        label: label
    }
return element       
}

export const formElement = (formElement, onChangeFunction) => {
    return <Input 
        key={formElement.id}
        elementType={formElement.config.elementType}  
        options={formElement.config.options} 
        elementConfig={formElement.config.elementConfig}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        label={formElement.config.label}
        display='block'
        changed={onChangeFunction} /> 
}

export const validity = (state, id) => {
    let isValid = true
    const updatedInput = {...state}
    const inp = updatedInput[id]
    inp.valid = checkValidity(inp.value, inp.validation)
    inp.touched = true
    updatedInput[id] = inp
    if(!inp.valid){
        isValid =  false
    }
    return { isvalid: isValid, state: updatedInput }
}