import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (entry) => {
        // console.log(entry);
        const response = await axios.get(`https://pixabay.com/api/?key=24224383-c19de3911326c46daec3f61df&q=${entry}&image_type=photo&pretty=true`);
        console.log(response.data.hits);
        this.setState({images:response.data.hits});
    }

    render() {
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
               <SearchInput onSearchSubmit={this.onSearchSubmit}/> 
               <ImageList images={this.state.images} />
               {/* We have {this.state.images.length} images */}
            </div>
        )
    }
}

export default App;
