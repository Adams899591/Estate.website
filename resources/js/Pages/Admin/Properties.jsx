import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Properties = () => {
  return (
    <>
      <Head title="Properties" />
      

    </>
  )
}

Properties.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default Properties