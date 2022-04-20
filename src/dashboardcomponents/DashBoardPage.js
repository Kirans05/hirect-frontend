import React from 'react'
import { useParams } from 'react-router-dom'
import DashboardBody from './DashboardBody'
import FooterDashBoard from './FooterDashBoard'
import MainDashBoardNavbar from './MainDashBoardNavbar'

const DashBoardPage = () => {
    const {paramsValue} = useParams()
  return (
    <div>
        <MainDashBoardNavbar />
        <DashboardBody />
        <FooterDashBoard />
    </div>
  )
}

export default DashBoardPage