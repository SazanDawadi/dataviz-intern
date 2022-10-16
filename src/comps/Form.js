import React, { useState } from 'react';
import formFeild from '../schema/formFields.json';
import '../styles/form.css'

const Form = () => {
    const [state, setState] = useState({});
    const[error, setError] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputData = state
        console.log(inputData)
      }

    const handleChange = (event,validation_rule) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
        setError({ ...error, [name]: false })
        
        if(validation_rule.validate){

            switch(event.target.type){
                case 'text':
                    if(value.length > validation_rule.rules.max  || value.length < validation_rule.rules.min ){
                        setError({ ...error, [name]: true })
        
                    }
                    break;

                case 'checkbox':
                    console.log(event.target.checked)
                    
                    if(!event.target.checked &&  validation_rule.rules.should_be_checked){
                        setError({ ...error, [name]: true });
                        setState({ ...state, [name]: true });

                    }
                    break;

                case 'file':
                    if(event.target.files[0].type === validation_rule.rules.file_type ){
                        setSelectedFile(event.target.files[0]);
                    }
                    else{
                        setError({ ...error, [name]: true });
                    }
                    
                    console.log(selectedFile)
                    break;

                case 'number':
                    if(value>  validation_rule.rules.max){
                        setError({ ...error, [name]: true });

                    }
                    break;


                default:
                    break;

            }
            console.log(event.target.type)
            
            if(value.length > validation_rule.rules.max){
                setError({ ...error, [name]: true })


            }

        }
      };

   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>{formFeild.form.form_name}</h1>
            {formFeild.form.feilds.map(inputData => {
                return(
                    <div className='input-container'>
                        <label>{inputData.label}</label>
                        <input name = {inputData.name} type= {inputData.html_element} placeholder = {inputData.name} onChange={(e) => {handleChange(e, inputData.validation_rule)}}  />
        
                        
                        {inputData.validation_rule.validate && error[inputData.name]?<div><br/><label className='error'>{inputData.error_msg}</label></div>:''}
                        
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