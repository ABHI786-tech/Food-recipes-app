import React from 'react'
import AuthLayout from './layout/authLayout'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import RegisterPage from './pages/RegisterPage'
import AboutPage from './pages/AboutPage'
import "./styles/index.scss"
import DashboardLayout from './layout/dashboardlayout'
import HomePage from './pages/FoodRecipeApp'

const App = () => {
  return (
    <>

      <Routes>
        {/* AuthLayout route  */}
        <Route element={<AuthLayout />} >
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>

        {/* dashboard Layout  */}
        <Route element={<DashboardLayout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>

      </Routes>

    </>
  )
}

export default App





