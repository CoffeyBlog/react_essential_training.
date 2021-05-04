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


const Hiring = () =>                                                                // ES6 hiring function w/ arrow key
    <div>
        <p>The Library is hiring. Go go to library.com/jobs for more.</p>
    </div>

const NotHiring = () =>                                                             // ES6 NOT hiring function w/ arrow key
    <div>
        <p>The Library is not hiring. Check back later for more.</p>
    </div>




class Library extends React.Component {

    /*constructor(){
       - state is called before constructor is mounted
       - making it a great place to initialize local state
       - you can also bind event handler methods to this component class
    }   */


    // Working with React Lifecycle methods - Mounting
    componentDidMount() {
        this.setState({loading : true})                         //
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data =>data.json())
            .then(data => this.setState({data, loading: false}))
    }

    // Working with React Lifecycle methods - Updating
    componentDidUpdate() {                                              // Look in the console to see if the Component has updated
    console.log("The component just updated")                           // It should only update after you select "Change State" button
    }

    state = {
        open: true,                                                     // The library is opsn
        freeBookMark: true,                                             // The library is giving out free bookmarks
        hiring: true,                                                   // The library is hiring
        data: [],
        loading: false
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {

        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring/> : <NotHiring/>}

                    {this.state.loading ? "loading" :
                        <div>
                            {this.state.data.map(product => {
                                return (
                                    <div key={product.id}>
                                        <h3>Product of the Week</h3>
                                        <h4> {product.name} </h4>
                                        <img src={product.image} height={100} alt={product.name}/>

                                    </div>
                                )
                            }
                        )
                    }

                        </div>
        }


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


