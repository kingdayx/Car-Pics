import React from 'react';
import './App.css'
import SearchBar from './SearchBar';

const App = props =>{
    return (
        <div className="ui container" id="searchbar" >
            <SearchBar/>
        </div>
    );
};

export default App;