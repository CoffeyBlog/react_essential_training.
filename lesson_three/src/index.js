import React from 'react';
import ReactDOM from 'react-dom';



var scope = {
    color: 'white',
    fontFamily: 'Arial'
}

var title = {
    backgroundColor: 'grey',
    color: 'white',
    fontFamily: 'Arial'
}

var content = {
    backgroundColor: 'blue',
    color: 'white',
    fontFamily: 'Arial'
}


ReactDOM.render(

    <div style = {scope}>
        <h1 style = {title}>Hello World</h1>
        <p style = {content}>We are glad you are here</p>

    </div>,

    document.getElementById('root'));



