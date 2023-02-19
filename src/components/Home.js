import React from 'react'

function Home() {
  return (
    <>
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                {/* <h1 className="text-6xl font-bold">Inkling</h1>
                 */}
                <img src="/pizza.png" alt="Inkling Logo" className="w-1/4 h-1/4" />
                <p className="mt-3 text-xl font-medium text-gray-600 dark:text-gray-500">
                    One step closer to inclusivity.
                </p>
                <div className="flex flex-col items-center justify-center mt-6 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                    <a href="/demo" className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started</a>
                    <a href="#" className="px-4 py-2 text-sm font-medium text-blue-600 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50">Learn More</a>
                </div>
            </div>

            {/* Features */}

            <div className="flex flex-col items-center justify-center py-16 pb-15 space-y-6  bg-gray-50 bg-gradient-to-t from-gray-900 to-gray-800">
                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">Features</h2>
                <p className="text-xl font-medium text-gray-600 dark:text-gray-400">
                    Inkling is a web app that allows you to make your documents more inclusive.
                </p>
                <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full">

                        {/* document logo svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Word Suggestions</h3>
                        <p className="text-base text-center text-gray-600 dark:text-gray-400">
                            Inkling allows you to make your documents more inclusive by suggesting words that are more inclusive. It has over 10 categories, which can easily be expanded upon.
                        </p>
                        </div>
                    <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-full">
                            {/* svg of pen */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"> <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/> </svg>
                            </div>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Appropriate Editing</h3>

                        <p className="text-base text-center text-gray-600 dark:text-gray-400">
                            An editor is provided to allow you to edit your documents. Inkling will suggest words that are more inclusive as you type.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Home