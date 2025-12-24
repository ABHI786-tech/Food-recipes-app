import React from 'react'
import AuthLayout from './layout/authLayout'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import RegisterPage from './pages/RegisterPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/FoodRecipeApp'
import DashboardLayout from './layout/dashboardLayout'
import RecipeDetail from './pages/recipeDetail'
// import "./styles/index.scss"

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
           <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Route>

      </Routes>

    </>
  )
}

export default App





