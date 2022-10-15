import React, { useEffect, useState } from 'react';
import formFeild from '../schema/formFields.json';
import '../styles/form.css'

const Form = () => {
    const [state, setState] = useState({});
    // const[error, setError] = useState({});
    // const [isValid,setIsValid] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
        // if(formFeild.form.feilds[name])
        // setState({ ...state, [name]: true });
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
        
                        {inputData.validation_rule?<label>{(String(state[inputData.name]).length > inputData.validation_rule.rules.max)?'errror':''}</label>:''}
                        <br/>
                        {}
                        {/* {console.log(String(state[inputData.name]).length)} */}
                    </div>

                )
            })}
            <input type = "submit" value = "Sign Up" />
        </form>
    </div>
  )
}

export default Form