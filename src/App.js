import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';


import './App.css';


const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


            const search = async (e) => {
            if(e.key === 'Enter'){
                const data = await fetchWeather(query)
                setWeather(data);
                setQuery('');
            }
        }


    return (
   <div className='main-container'>
        <input
            type='text'
            className='search'
            placeholder='search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}

            {weather.main && (
                <div className='city-name'>
                    <h2>
                        <span></span>
                    </h2>                   
                </div>
            )}
        />
   </div>
    );
}

export default App;