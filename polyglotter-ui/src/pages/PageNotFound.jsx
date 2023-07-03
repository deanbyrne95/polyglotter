import React from "react";

import Logo from "../assets/polyglotter10x.png";

const PageNotFound = () => {
    return (
        <section className="h-screen">
            <div className="pt-12 flex flex-wrap justify-center items-center">
                <div className="sm:w-1/2">
                    <div className="px-5">
                        <img src={Logo} className="min-w-[60%]" alt="Polyglotter Logo" />
                    </div>
                </div>
                <div className="sm:w-1/4 lg:w-1/3 w-1/2">
                    <h2 className="text-[12px] sm:text-lg pb-5 font-black flex text-white justify-center items-center drop-shadow-md">Error 404, Can't seem to find the page </h2>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;