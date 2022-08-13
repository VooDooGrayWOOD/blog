import React from 'react'

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
        <div className="container mx-auto max-w-[760px] pt-5 text-teal-700 text-2xl">
            <div className="bg-[--secondary]">
                <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-teal-700 sm:text-4xl">
                            I'm Sergey, software engineer
                        </h2>
                        <p className="mt-4 text-gray-500">
                            I specialize in JavaScript, including React. I write
                            about my successes on Twitter, I post the code on
                            GitHub.
                        </p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
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
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                        <img
                            src="https://images.unsplash.com/photo-1533906966484-a9c978a3f090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                            className="bg-gray-100 rounded-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="bg-gray-100 rounded-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1550529791-9799c4abb4ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="bg-gray-100 rounded-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1655226569976-ab0c362f1e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="bg-gray-100 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
