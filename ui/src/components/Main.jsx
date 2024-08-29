
import React from 'react';
import Filter from './Filter';
import JobSearch from './JobSearch';
const Main = () => {
    return (
        <div className="flex h-full">
            <div className="w-[30%] p-4">
                <Filter />
            </div>
            <div className="w-[70%] p-4">
                <JobSearch />
            </div>
        </div>
    );
}

export default Main;
