import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';


// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {
//             console.log(position);
//         }, 
//         (error) => {
//             console.log(error);
//         }
//     );
//     return(
//         <div>
//             Hello world!
//         </div>
//     )
// }

class App extends React.Component{

    //Best practice for initializing values/state
    // constructor(props){
    //     super(props);
    //     this.state = {latitude: null, errorMessage: ''};      
    // }

    state = { latitude: null, errorMessage: ''};      


    //Best practice good for loading data
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude});
            }, 
            (error) => {
                this.setState({errorMessage: error.message}); 
            }
        );
    }

    render() {
        // return(
        //     <div>
        //         {this.state.latitude}
        //         {this.state.errorMessage}
        //     </div>
        // )
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>{ this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude) {
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        }

        else{
            return<div> Loading... </div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)























/***
 * 
 * import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {
//             console.log(position);
//         }, 
//         (error) => {
//             console.log(error);
//         }
//     );
//     return(
//         <div>
//             Hello world!
//         </div>
//     )
// }

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {latitude: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position);
                this.setState({latitude: position.coords.latitude});
            }, 
            (error) => {
                this.setState({errorMessage: error.message}); 
            }
        );
    }

    render() {
        // return(
        //     <div>
        //         {this.state.latitude}
        //         {this.state.errorMessage}
        //     </div>
        // )
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>{ this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude) {
            return <div> {this.state.latitude} </div>
        }

        else{
            return<div> Loading... </div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
 */