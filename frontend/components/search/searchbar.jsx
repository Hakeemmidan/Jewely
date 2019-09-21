import React from 'react';

export class Searchbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: props.products
        }
    }
    
    componentDidMount() {
        document.querySelectorAll('.navbar-searchbar')[0].addEventListener('input', function() {
            console.log('hello')
        })
    }

    render() {
        return (
            <div>
                Hello world!!! This is the searchbar
            </div>
        )
    } 
}