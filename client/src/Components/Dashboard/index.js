import React from 'react'
import { Outlet } from "react-router-dom"
import { AdminLayout } from "../../HOC/Admin.layouts"

export const Dashboard = () => {
  return (
    <AdminLayout>
    <Outlet />
    </AdminLayout>
  )
}
