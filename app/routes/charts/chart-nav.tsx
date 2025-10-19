import React from 'react';

const ChartNav = () => {
    return (
        <div
            className={"w-full sticky top-16 md:flex items-center text-white text-sm justify-center gap-10 py-2 hidden bg-[#121212]/90 z-50"}>
            <div>
                Top 50 Songs
            </div>
            <div>
                Top 50 Local
            </div>
            <div>
                Top 50 Global
            </div>
            <div>
                Top 20 Artists
            </div>
        </div>
    );
};

export default ChartNav;