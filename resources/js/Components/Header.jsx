import { Link, Head } from "@inertiajs/react";
import React,  { useState }  from "react";
import img from "../../img/jl4.png";
// import img from "../../../img/jl4.png";
const Header = ({...props}) => {
    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img
                                className="w-auto h-12 bg-transparent"
                                src={img}
                                alt=""
                            />
                        </a>
                    </div>

                    <button
                        type="button"
                        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                    >
                        <svg
                            className="block w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 8h16M4 16h16"
                            />
                        </svg>

                        <svg
                            className="hidden w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        {/* <a
                    href="#"
                    title=""
                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                    {" "}
                    Features{" "}
                </a>

                <a
                    href="#"
                    title=""
                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                    {" "}
                    Solutions{" "}
                </a>

                <a
                    href="#"
                    title=""
                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                    {" "}
                    Resources{" "}
                </a>

                <a
                    href="#"
                    title=""
                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                    {" "}
                    Pricing{" "}
                </a> */}
                        {props.auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                            {/* <a
                        href="#"
                        title=""
                        className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                        {" "}
                        Features{" "}
                    </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                        {" "}
                        Solutions{" "}
                    </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                        {" "}
                        Resources{" "}
                    </a>

                    <a
                        href="#"
                        title=""
                        className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    >
                        {" "}
                        Pricing{" "}
                    </a> */}
                            {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
