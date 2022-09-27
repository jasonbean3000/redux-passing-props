import React from 'react';

import { useSelector } from 'react-redux';

import './Results.css'



export default function Results() {
    // useSelector takes imported selector function addedSearchResults as argument
    // the returned value is the selected data from the redux store
    // assigned as searchResults
    // calling useSelector in side Results subscribes the Results component to 
    // re-render if any changes occer in the searchResults portion of redux store
    
    const searchResults = useSelector((state) => state.results);
    
    
    
    // const showResults = () => {
    //     dispatch(addServerResults, addDateResults, addIdResults);
    // }
   
    

    // useEffect(() => {
    //     dispatch(addServerResults, addDateResults, addIdResults)
    // }, [searchResults]);
    
    
    return (
        <div className="results" >
         <h3> Server: {searchResults.server.server}</h3>   
         <h3> Date: {searchResults.server.date}</h3>  
         <h3> ID: {searchResults.server.id}</h3>  
        </div>
    )
};