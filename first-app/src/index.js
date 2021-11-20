import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Hi there!';
}

const App = () => {
    const buttonText = 'Click Me';
    return(
        <div>
            <label htmlFor="name" className="label">enter e-mail</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'red', color: 'white'}}>{ getButtonText()}</button>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)