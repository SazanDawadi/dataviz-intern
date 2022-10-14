import React, { useState } from 'react';
import formFeild from '../schema/formFields.json';
import '../styles/form.css'

const Form = () => {
    const [state, setState] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>{formFeild.form.form_name}</h1>
            {formFeild.form.feilds.map(inputData => {
                return(
                    <div className='input-container'>
                        <label>{inputData.label}</label>
                        <input name = {inputData.name} type= {inputData.html_element} placeholder = {inputData.name} onChange={handleChange}  />
                        <br/>
                    </div>

                )
            })}
            <input type = "submit" value = "Sign Up" />
        </form>
    </div>
  )
}

export default Form