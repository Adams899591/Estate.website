import DevLuxGuestLayout from '@/Layouts/DevLux/DevLuxGuestLayout'
import React from 'react'
import { Head, Link, usePage } from '@inertiajs/react'

const PaymentSuccess = () => {
  // We can grab data passed from the backend or the payment component
  const { transactionId, amount, propertyName } = usePage().props;

  return (
    <>
        <Head title="Payment Successful" />

        <div className="bg-gray-100 min-h-[80vh] flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all">
                <div className="p-8 text-center">
                    {/* Success Icon */}
                    <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6">
                        <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Payment Successful!</h2>
                    <p className="text-gray-500 mb-8">
                        Thank you for your purchase. Your transaction has been completed and a receipt has been emailed to you.
                    </p>

                    {/* Transaction Details Box */}
                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left border border-gray-100">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-400 text-sm">Property</span>
                            <span className="text-gray-900 font-semibold text-sm">{propertyName || 'Luxury Villa'}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-400 text-sm">Amount Paid</span>
                            <span className="text-gray-900 font-semibold text-sm">${amount ? Number(amount).toLocaleString() : '---'}</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                            <span className="text-gray-400 text-xs italic">Transaction ID</span>
                            <span className="text-blue-600 font-mono text-xs font-bold uppercase">{transactionId || 'N/A'}</span>
                        </div>
                    </div>

                    <Link 
                        href={route('page.home')} 
                        className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

PaymentSuccess.layout = page => <DevLuxGuestLayout>{page}</DevLuxGuestLayout>
export default PaymentSuccess