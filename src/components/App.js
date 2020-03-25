import React from 'react';
import './App.css'
import SearchBar from './SearchBar';

class App extends React.Component{
   onSearchSubmit(term){
        console.log(term);
   }
   
    render(){
    return (
        <div className="ui container" id="searchbar" >
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
    );
}};

export default App;