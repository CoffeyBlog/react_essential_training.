import React from 'react';
import { render } from 'react-dom';
import Library from './Library'

    let bookList =
            [
        {"title": " Hunger", "author": "Roxanne Gay", "pages": 320},
        {"title": " The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
        {"title": " White Teeth", "author": "Zadie Smith", "pages": 480},
        {"title": " Cats Cradle", "author": "Kurt Vonnegut", "pages": 304},
        {"title": "Dingo Dogs"},
            ]


// Render to the DOM ...
    render(
        <Library books = {bookList}/>,                                                                                 // books "variable" is returning books from the books list
        document.getElementById('root')
    )
