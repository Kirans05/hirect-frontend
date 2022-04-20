import React, { useContext, useState } from 'react'
import bookImage from "../images/book-logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { user } from '../context';

const MainDashBoardNavbar = () => {
  const contextValue = useContext(user)
  const [inputValue,setinputValue] = useState("")

  const SearchHandler = (e) => {
    e.preventDefault()
    setinputValue(e.target.value)
  }

  const KeyPressed = (e) => {
    if(e.key == "Enter"){
      contextValue.SearchResult(inputValue)
    }

  }

  return (
    <div className='mainNavbar'>
        <img src={bookImage} alt='Book Image' />
        <div className='middleMainnavbar'>
            <input type={"search"} placeholder="Search" value={inputValue} onChange={SearchHandler} onKeyPress={KeyPressed}/>
            <SearchIcon className="searchIcon"/>
        </div>
        <div className='rightMainNavbar'>
            <NavLink to={"/dashboard/:paramsValue"} className="Logoutbtn1"><Button variant="contained">Home</Button></NavLink>
            <NavLink to={"/"} className="Logoutbtn1"><Button variant="contained">LogOut</Button></NavLink>
        </div>
    </div>
  )
}

export default MainDashBoardNavbar