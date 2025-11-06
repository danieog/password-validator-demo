import './App.css'
import React, { useState } from "react";
import validator from 'validator'

const App = () => {

    const [errorMessage, setErrorMessage] = useState('')

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Strong Password')
        } else {
            setErrorMessage('Not Strong Enough')
        }
    }

    return (
        <div style={{
            marginLeft: '200px',
        }}>
            <pre>
                <h2>Is Your Password Strong?</h2>
                <span>Enter Password: </span><input type="text"
                    onChange={(e) => validate(e.target.value)}></input> <br />
                {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color: '#af0000ff',
                    }}>{errorMessage}</span>}
            </pre>
        </div>
    );
}

export default App