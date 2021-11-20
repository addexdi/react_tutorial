import React from 'react';

class SearchInput extends React.Component {
    /***
     *ONE TO SOLVE THE THIS PROBLEM OF UNDEFINED 
     // constructor(){
     //     super();
     //     this.onFormSubmit = this.onFormSubmit.bind(this);
     // }
     */

    state = { entry: ''};
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    ////Second way of fixing the this issue is converting the function to arrow function
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }

    render(){
        return(
            <div className='ui segment'>
                <form onSubmit= {this.onFormSubmit} className='ui form' action="">
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input type="text" 
                                placeholder='search...' 
                                //onChange={this.onInputChange} //onSubmit onClick
                                onChange={event => this.setState({entry:event.target.value})}
                                value={this.state.entry}
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;