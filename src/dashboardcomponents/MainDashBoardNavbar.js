import React, { useContext, useEffect, useState } from 'react'
import bookImage from "../images/book-logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { user } from '../context';

const MainDashBoardNavbar = () => {
  const contextValue = useContext(user)
  const [inputValue,setinputValue] = useState("")
  // const [suggestionValue,setsuggestionValue] = useState(null)

  const SearchHandler = (e) => {
    e.preventDefault()
    setinputValue(e.target.value)
  }

  const KeyPressed = (e) => {
    if(e.key == "Enter"){
      contextValue.SearchResult(inputValue)
      contextValue.keywordSearched(inputValue)
      setinputValue("")
    }

  }

  // const getSuggestions = () => {
  //   // setsuggestionValue(contextValue.keywords)
  //   let filteredValue = [] 
  //   for(let i=0;i<contextValue.keywords.length;i++){
  //     if(contextValue.keywords.indexOf(contextValue.keywords[i]) == i){
  //       filteredValue.push(contextValue.keywords[i])
  //     }
  //   }
  //   console.log(filteredValue)
  //   setsuggestionValue(filteredValue)
  // }

  // useEffect(()=>{
  //   getSuggestions()
  // },[])

  // const clickhandler = (e) => {
  //   setinputValue(e.target.innerText)
  //   setsuggestionValue(null)
  // }

  return (
    <div className='navSuggestion'>
    <div className='mainNavbar'>
        <img src={bookImage} alt='Book Image' />
        <div className='middleMainnavbar'>
            <input type={"search"} placeholder="Search" value={inputValue} onChange={SearchHandler} onKeyPress={KeyPressed}/>
            <SearchIcon className="searchIcon" />
        </div>
        <div className='rightMainNavbar'>
            <NavLink to={"/dashboard/:paramsValue"} className="Logoutbtn1"><Button variant="contained">Home</Button></NavLink>
            <NavLink to={"/"} className="Logoutbtn1"><Button variant="contained">LogOut</Button></NavLink>
        </div>
    </div>
        {/* <div className='suggestionBar' >
          {
              suggestionValue ? suggestionValue.map((items,index) => 
                <h4 key={index} onClick={clickhandler}>{items}</h4>
                )
              : null
          }
        </div> */}
    </div>
  )
}

export default MainDashBoardNavbar