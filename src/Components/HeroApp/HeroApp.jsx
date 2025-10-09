import React from 'react'



const HeroApp = () => {
    
    return (
        <div
            className="w-full text-white"
            style={{
                background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)',
            }}
            >
            <h1 className="text-2xl md:text-4xl font-bold text-center py-6 px-4">
                Trusted by Millions, Built for You
            </h1>

            <div className="flex flex-col md:flex-row justify-around items-center p-6 md:p-12 gap-6">
                {/* Item 1 */}
                <div className="text-center">
                <h1 className="text-sm md:text-base font-light">Total Downloads</h1>
                <h1 className="text-5xl md:text-7xl font-extrabold">29.6M</h1>
                <h1 className="text-sm md:text-base font-light">21% more than last month</h1>
                </div>

                {/* Item 2 */}
                <div className="text-center">
                <h1 className="text-sm md:text-base font-light">Total Reviews</h1>
                <h1 className="text-5xl md:text-7xl font-extrabold">906K</h1>
                <h1 className="text-sm md:text-base font-light">46% more than last month</h1>
                </div>

                {/* Item 3 */}
                <div className="text-center">
                <h1 className="text-sm md:text-base font-light">Active Apps</h1>
                <h1 className="text-5xl md:text-7xl font-extrabold">132+</h1>
                <h1 className="text-sm md:text-base font-light">31 more will launch</h1>
                </div>
            </div>
            </div>

    );
};

export default HeroApp;