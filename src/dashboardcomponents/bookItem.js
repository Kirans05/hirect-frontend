import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import coverImage from "../images/cover-image.png"


const BookItem = ({item}) => {
  const nav = useNavigate()
  const individualBookClicked = () => {
    nav(`/bookDetailsPage/${item.id}`)
  }

  return (
    <div className='bookCardBody' onClick={individualBookClicked}>
      {
                        item.volumeInfo.imageLinks == undefined?
                        <img src={coverImage} alt="Cover image" />
                        :<img src={`${item.volumeInfo.imageLinks.thumbnail}`} alt="Book Image" />
                         
                    }
        <div className='bookCardBodyInfo'>
        <h4 className='h3tag'>{item.volumeInfo.title}</h4>
        <h4 className='h3tag'>{item.volumeInfo.subtitle}</h4>
        {
                            item.volumeInfo.authors == undefined ?
                            <h2>Author - Unknown</h2>
                            : <h2 className='h3tag'>Author - {item.volumeInfo.authors[0]}</h2>
        }
       
        <h4 className='h3tag'>Pages - {item.volumeInfo.pageCount}</h4>
        </div>
    </div>
  )
}

export default BookItem