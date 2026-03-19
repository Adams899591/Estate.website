import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

const Login = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const submit = (e) => {
    e.preventDefault()
    // post(route('login'), {
    //   onFinish: () => reset('password'),
    // })
  }

  return (
      <>
        <Head title="Admin Login" />
        
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-slate-100 p-8">
                {/* Logo / Branding */}
                <div className="text-center mb-8">
                    <div className="text-2xl font-bold text-slate-800">
                        DEVLUX <span className="text-blue-600">ESTATES</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-2">Welcome back! Please sign in to continue.</p>
                </div>

                <form onSubmit={submit}>
                    {/* Email Input */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-colors ${
                                errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200'
                            }`}
                            placeholder="admin@devluxestates.com"
                            autoComplete="username"
                            autoFocus
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Password Input */}
                    <div className="mb-5">
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-slate-700" htmlFor="password">
                                Password
                            </label>
                            {/* <Link href={route('password.request')} className="text-xs text-blue-600 hover:text-blue-700 font-medium">Forgot Password?</Link> */}
                        </div>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-colors ${
                                errors.password ? 'border-red-500 focus:ring-red-200' : 'border-slate-200'
                            }`}
                            placeholder="••••••••"
                            autoComplete="current-password"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    {/* Remember Me & Submit */}
                    <div className="flex items-center mb-6">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-slate-600 cursor-pointer select-none">Keep me signed in</label>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
                    >
                        {processing ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
            </div>
            
            <div className="mt-8 text-slate-400 text-xs">
                &copy; {new Date().getFullYear()} Devlux Estates. All Rights Reserved.
            </div>
        </div>
      </>
  )
}

export default Login
