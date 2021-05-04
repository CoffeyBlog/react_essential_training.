import React from 'react';
import { render } from 'react-dom';

    // Composing Components listing multiple books within a Library through the use of only one Book component
    // By destructing the components - I can now remove {this.props.____ }


    let bookList = [
        {"title": " Hunger", "author": "Roxanne Gay", "pages": 320},
        {"title": " The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
        {"title": " White Teeth", "author": "Zadie Smith", "pages": 480},
        {"title": " Cats Cradle", "author": "Kurt Vonnegut", "pages": 304},
    ]


    const Book = ({title, author, pages, freeBookMark}) => {
        return(
            <section>
                <h2>{title}</h2>
                <p>by: {author}</p>
                <p>pages: {pages}</p>
                <p>Free Book Mark Today: {freeBookMark ? 'yes' : 'no'}</p>
            </section>
        )
    }


    const Hiring = () =>
        <div>
            <p>The Library is hiring. Go go to library.com/jobs for more.</p>
        </div>

    const NotHiring = () =>
        <div>
            <p>The Library is not hiring. Check back later for more.</p>
        </div>




    class Library extends React.Component {
        state = {
            open: true,
            freeBookMark: true,
            hiring: true
        }

        toggleOpenClosed = () => {
            this.setState(prevState => ({
            open: !prevState.open
            }))
        }

        render() {
            console.log(this.state)
            const { books } = this.props
            return (
                <div>
                    {this.state.hiring ? <Hiring/> : <NotHiring/>}
                    <h1>The library is { this.state.open ? 'open' : 'closed'} </h1>
                    <button onClick={this.toggleOpenClosed}> Change State</button>
                    {books.map(
                        (book, i) => <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                            freeBookMark = {this.state.freeBookMark}
                        />
                    )}
                </div>
            )
        }
    }






    // render ReactDOM
    render(
        <Library books = {bookList}/>,
        document.getElementById('root')
    );

