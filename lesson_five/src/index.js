// By destructing the components - I can now remove {this.props.____ }

import React, { Component } from 'react';
import { render } from 'react-dom';


let Days_of_Code = {
    total: 90,
    HTML: 30,
    CSS: 30,
    JavaScript: 30,
    Goal: 100
}


const getPercent = decimal => {
    return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) => {
    return getPercent( total/goal)
}


const Days_Coding_Counter = ({ total, html, css, javascript, goal}) => {

    return(
        <section>
            <div>
                <p><b>Total Days:</b> {total}</p>
            </div>
            <div>
                <p><b>1 year of Code -</b> HTML: {html}</p>
            </div>
            <div>
                <p><b>1 year of Code -</b> CSS: {css}</p>
            </div>
            <div>
                <p><b>1 year of Code -</b> JavaScript: {javascript}</p>
            </div>
            <div>
                <p><b>1 year of Code -</b> Progress towards goal: {calcGoalProgress(total,goal)}</p>
            </div>
        </section>
    )
}

// render ReactDOM
render(
    <Days_Coding_Counter
        total = {Days_of_Code.total}
        html = {Days_of_Code.HTML}
        css = { Days_of_Code.CSS}
        javascript = { Days_of_Code.JavaScript}
        goal = { Days_of_Code.Goal}
    />,
    document.getElementById('root')
);

