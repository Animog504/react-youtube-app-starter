import React, { Component } from 'react';

class Search extends Component
{
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label for='textBox'>Search:</label>
                    <input className='textBox' type='text'></input>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Search;