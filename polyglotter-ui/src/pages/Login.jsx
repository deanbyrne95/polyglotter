import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/polyglotter10x.png";

const Login = () => {
    return (
        <section className="min-h-screen">
            <div className="pt-0 md:pt-5 flex flex-wrap justify-center items-center">
                <div className="md:w-1/2">
                    <div className="flex flex-col justify-center items-center mb-0 sm:mb-0">
                        <img
                            src={Logo}
                            className="sm:w-full w-[80%] drop-shadow-lg"
                            alt="Polyglotter Logo"
                        />
                    </div>
                </div>
                <div className="md:w-1/4 lg:w-1/3 w-[60%] mb-8">
                    <p className="text-[10px] sm:text-lg pb-5 font-black tracking-widest flex text-white justify-center items-center drop-shadow-md">
                        We eliminate language barriers
                    </p>
                    <div className="rounded-xl bg-white bg-opacity-10 drop-shadow-md">
                        <form className="p-5">
                            <div className="mb-3 pb-5">
                                <label
                                    htmlFor="email"
                                    className="text-xl text-primary tracking-widest font-black"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="@email.com"
                                    className="text-white placeholder-primary placeholder-opacity-50 mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-primary/30 p-3 text-sm md:text-xl outline-none border-primary"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="text-xl text-primary tracking-widest font-black"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="XXRockstar89!"
                                    className="text-white placeholder-primary placeholder-opacity-50 mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-primary/30 p-3 text-sm md:text-xl outline-none border-primary"
                                />
                            </div>
                            <button className="w-full text-xl mt-4 py-3 px-4 bg-primary/40 text-primary font-black tracking-wider uppercase border-secondary rounded-xl hover:bg-tertiary hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                                Login
                            </button>
                        </form>
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold text-primary">
                                OR
                            </p>
                        </div>
                        <p className="text-sm sm:text-md flex text-white justify-center items-center drop-shadow-md">
                            Don't have an account?
                        </p>
                        <Link
                            className="text-lg pb-5 font-black sm:text-md flex text-tertiary justify-center items-center drop-shadow-md hover:text-primary hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                            to="/register"
                        >
                            Join us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;