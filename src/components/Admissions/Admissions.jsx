import React from 'react'

const Admissions = () => {
    return (
        <div className="bg-gray-50 font-sans text-gray-900 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
                <main className="flex-1">
                    <div className="flex items-center gap-6 mb-10">
                        <span aria-hidden="true" className="block w-2 h-16 bg-blue-600 rounded-full"></span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-tight">
                            NYFA ADMISSIONS
                        </h1>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-12">
                        For aspiring visual artists, choosing a college is an important and potentially life-changing decision. At NYFA, we’re here to assist prospective students with all of their questions about our programs, tuition, and requirements, as well as enrolling as an international, veteran, or transfer student. From submitting an application to officially enrolling, NYFA’s admissions team will help every step of the way.
                    </p>
                </main>
                <aside className="w-full lg:w-80 flex-shrink-0 bg-white p-6 rounded-lg shadow-xl">
                    <h2 id="related-links-heading" className="text-lg font-extrabold uppercase tracking-wider text-gray-800 mb-6">
                        RELATED LINKS
                    </h2>
                    <nav aria-labelledby="related-links-heading" className="flex flex-col text-base font-medium text-gray-700">
                        <a href="#" className="px-4 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
                            ADMISSIONS REQUIREMENTS
                        </a>
                        <a href="#" className="px-4 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
                            IMPORTANT DATES
                        </a>
                        <a href="#" className="px-4 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
                            PROGRAM DATES & TUITION
                        </a>
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default Admissions
