import React from 'react'
import './style.css'

const features = [
    { name: 'Origin', description: 'Lorem ipsum' },
    {
        name: 'Material',
        description:
            'Solid walnut base with rare earth magnets and powder coated steel card cover'
    },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    {
        name: 'Finish',
        description: 'Hand sanded and finished with natural oil'
    },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    {
        name: 'Considerations',
        description:
            'Made from natural materials. Grain and color vary with each item.'
    }
]

const Main = () => {
    return (
        <div className="container mx-auto text-teal-700">
            <div className="bg-[--secondary]">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-4 px-4 sm:px-6 sm:py-22 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                        <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="border-t border-gray-200 pt-4"
                                >
                                    <dt className="font-medium text-teal-700">
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-[1.2rem] text-gray-500">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="body grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <div className="loader">
                            <span style={{"--i":10}}></span>
                            <span style={{"--i":9}}></span>
                            <span style={{"--i":8}}></span>
                            <span style={{"--i":7}}></span>
                            <span style={{"--i":6}}></span>
                            <span style={{"--i":5}}></span>
                            <span style={{"--i":4}}></span>
                            <span style={{"--i":3}}></span>
                            <span style={{"--i":2}}></span>
                            <span style={{"--i":1}}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
