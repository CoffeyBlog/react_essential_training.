import React from 'react'                                            // You have to import the react library to use it.
import ReactDOM from 'react-dom'                                    // This is a render method, that allows us to render react to the dom


var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}




const title = React.createElement(                                  // Here we are instantiating the react element
    'h1',                                                           // That element that we instantiated is an h1
    {id: 'title', className: 'header', style: style},               // These are attributes that we would like to provide --- this is also where the styles goes
    'Hello World'                                                   // This can either be child elements or - just add text
)




ReactDOM.render(                                                     // We are telling react - that we want to render something to the dom
    title,                                                           // That something we want to render is the element "title"
    document.getElementById('root')                         //
)

