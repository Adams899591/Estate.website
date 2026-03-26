import AdminDashboardLayout from '@/Layouts/Admin/AdminDashboardLayout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement);

const Analytics = () => {
       const {analytics} = usePage().props;

       
       
  // Data for Property Status Distribution Chart (Doughnut)
  const propertyStatusData = {
    labels: ['For Sale', 'For Rent', 'Sold'],
    datasets: [
      {
        label: '# of Properties',
        data: [analytics.forSale, analytics.forRent, analytics.sold],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(16, 185, 129, 0.7)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(16, 185, 129, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



  // Data for Property Types Chart (Bar)
  const propertyTypesData = {
    labels: ['House', 'Apartment', 'Commercial'],
    datasets: [{
      label: 'Number of Properties',
      data: [analytics.house, analytics.apartment, analytics.commercial],
      backgroundColor: 'rgba(96, 165, 250, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1
    }]
  };
  
  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Property Types Distribution' },
    },
  };



  // Data for Monthly Views Chart (Line)
  const monthlyViewsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Property Views',
      data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Property Views' },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Property Status' },
    },
  };

  return (
    <>
      <Head title="Analytics" />
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Analytics Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Visualizing your estate data.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <Doughnut options={doughnutOptions} data={propertyStatusData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <Bar options={barOptions} data={propertyTypesData} />
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <Line options={lineOptions} data={monthlyViewsData} />
        </div>
      </div>
    </>
  )
}

Analytics.layout = page => <AdminDashboardLayout>{page}</AdminDashboardLayout>

export default Analytics