
import React from "react"
import PropTypes from "prop-types"
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'


class Library extends React.Component {

    static defaultProps = {                                                                                         // An object of objects
        books: [
            {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
        ]
    }


    state = {
        open: true,                                                                                                 // The library is opsn
        freeBookMark: true,                                                                                         // The library is giving out free bookmarks
        hiring: true,                                                                                               // The library is hiring
        data: [],
        loading: false
    }


    // Working with React Lifecycle methods - Mounting
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    // Working with React Lifecycle methods - Updating
    componentDidUpdate() {                                                                                          // Look in the console to see if the Component has updated
        console.log("The component just updated")                                                                   // It should only update after you select "Change State" button
    }


    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }


    render() {

        const {books} = this.props
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


                <h1>The library is {this.state.open ? 'open' : 'closed'} </h1>
                <button onClick={this.toggleOpenClosed}> Change State</button>
                {books.map(
                    (book, i) => <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        freeBookMark={this.state.freeBookMark}
                    />
                )}
            </div>
        )
    }
}


Library.protoTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookMark: PropTypes.bool
}

export default Library