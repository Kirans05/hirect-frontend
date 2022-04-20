import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { user } from '../context'
import MainDashBoardNavbar from './MainDashBoardNavbar'
import FooterDashBoard from "./FooterDashBoard"
import coverImage from "../images/cover-image.png"

const BookeDetailsPage = () => {
    const {id} = useParams()
    const contextValues = useContext(user)
    const [bookDeatils,setbookDeatils] = useState("")

    useEffect(() => {
        console.log(contextValues.bookList)
        const filterItem = contextValues.bookList.filter(item => item.id == id)
        console.log(filterItem)
        setbookDeatils(filterItem)
    },[])

  return (
    <div>
        <MainDashBoardNavbar />
        {
            bookDeatils ? 
            <div className='divBookBody'>
                <div className='divBookDeatils'>
                    {
                        bookDeatils[0].volumeInfo.imageLinks ? 
                        <img src={`${bookDeatils[0].volumeInfo.imageLinks.thumbnail}`} alt="Book Image" />
                        : <img src={coverImage} alt="book image" className='coverImages'/>
                    }
                    {/* <img src={`${bookDeatils[0].volumeInfo.imageLinks.thumbnail}`} alt="Book Image" /> */}
                    <div className='divBookDetailsSide'>
                        <h2>Title - {bookDeatils[0].volumeInfo.title}</h2>
                        <h2>SubTitle - {bookDeatils[0].volumeInfo.subtitle}</h2>
                        {
                            bookDeatils[0].volumeInfo.authors == undefined ?
                            <h2>Author - Unknown</h2>
                            :<h2>Author - {bookDeatils[0].volumeInfo.authors[0]}</h2>
                        }
                        {
                        bookDeatils[0].volumeInfo.categories == undefined ? 
                        <h2>Category - Unknown Author</h2>
                        : <h2>Category - {bookDeatils[0].volumeInfo.categories[0] }</h2> 
                        }

                        <h2>Language - {bookDeatils[0].volumeInfo.language == "en" ? "English" : bookDeatils[0].volumeInfo.language}</h2>
                        {
                            bookDeatils[0].saleInfo.buyLink ? <Button variant='contained'style={{backgroundColor:"red"}} onClick={()=>window.open(`${bookDeatils[0].saleInfo.buyLink}`)}>Buy Book</Button> : null
                        }
                        
                    </div>
                </div>
                <h1>Description</h1>
                {
                    bookDeatils[0].volumeInfo.description ? <h2>{bookDeatils[0].volumeInfo.description}</h2>
                    : <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </h2>
                }
                
                </div>
             :
            <h1>No Item To Display</h1>
        }
        <FooterDashBoard />
    </div>
  )
}

export default BookeDetailsPage