import React from 'react'
import './style.css'

const Main = () => {
    return (
        <div className="container mx-auto text-teal-700">
            <div className="bg-[--secondary]">
                <div className="body grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <div className="loader text-center text-3xl">
                        <span style={{ '--i': 10 }}>Welcome to</span>
                        <span style={{ '--i': 9 }}>my</span>
                        <span style={{ '--i': 8 }}>blog.</span>
                        <span style={{ '--i': 7 }}>I'am Frontend</span>
                        <span style={{ '--i': 6 }}>Developer.</span>
                        <span style={{ '--i': 5 }}>This app</span>
                        <span style={{ '--i': 4 }}>based on</span>
                        <span style={{ '--i': 3 }}>React/Redux.</span>
                        <span style={{ '--i': 2 }}>Enjoy!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
