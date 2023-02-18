import React from 'react'

function Home() {
  return (
    <>
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold">Inkling</h1>
                <p className="mt-3 text-xl font-medium text-gray-600 dark:text-gray-400">
                    A simple, beautiful, and easy to use markdown editor.
                </p>
                <div className="flex flex-col items-center justify-center mt-6 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                    <a href="#" className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started</a>
                    <a href="#" className="px-4 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">Learn More</a>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Home