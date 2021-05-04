import React from 'react';
import ReactDOM from 'react-dom';

class Dog extends React.Component {                                           //You class "extends" the React component - like Java inherentence
    render (){                                                                //You must render the component to the dom
        return (                                                              //You always have to have a return value -- That return value is whatever you are rendering to the dom
            <div>
                <h1 style = {{ color: this.props.color }}>
                    {this.props.msg}
                </h1>
                <p>I have { this.props.amount_of_dogs } dog.</p>
                <p>She is a { this.props.gender_of_dog } .</p>
                <p>She has { this.props.color_of_dog } hair.</p>
            </div>
        )
    }
}


ReactDOM.render(
    <Dog msg="My dog Mocha" color="brown"
         amount_of_dogs={1}
         gender_of_dog="female"
         color_of_dog="brown"
    />,
    document.getElementById('root'));
