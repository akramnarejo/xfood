import React from 'react'
import Navbar from './navbar'
import { Outlet } from "react-router-dom"
import { Suspense } from "react"

const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    </>
  )
}

export default Layout