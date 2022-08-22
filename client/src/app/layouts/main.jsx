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
        <div className="container mx-auto max-w-[760px] pt-5 text-teal-700">
            <div className="bg-[--secondary]">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
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
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1550529791-9799c4abb4ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="Side of walnut card tray with card groove and recessed card area."
                            className="rounded-lg bg-gray-100"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1655226569976-ab0c362f1e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                            alt="Walnut card tray filled with cards and card angled in dedicated groove."
                            className="rounded-lg bg-gray-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
