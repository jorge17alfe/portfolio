import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";

import img from "../../img/jl4.png";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    var title = "https://alocraise.com";
    return (
        <>
            <Head title="Welcome" />
        
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
                            {auth.user ? (
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
                                {auth.user ? (
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

            <div className=" sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker  bg-center bg-indigo-50 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end"></div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center ">
                        <Link href="/">
                            <ApplicationLogo className="h-20 " />
                        </Link>
                    </div>

                    <div className="mt-16">
                        <a
                            href={title}
                            className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                        >
                            <figure className="justify-center text-center me-5">
                                <img src={img} className="mb-5" alt="" />
                                <figcaption>
                                    {" "}
                                    <p>
                                        <hr /> Jorge Ordóñez <hr />{" "}
                                        <b>Developer Freelance</b> <hr />
                                    </p>
                                </figcaption>
                            </figure>
                            <div className="p-10 bg-indigo-50 rounded">
                                <div className=""></div>

                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                    Biogra
                                </h2>

                                <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    Laravel has wonderful documentation covering
                                    every aspect of the framework. Whether you
                                    are a newcomer or have prior experience with
                                    Laravel, we recommend reading our
                                    documentation from beginning to end.
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                        <div className="text-center text-sm sm:text-start">
                            &nbsp;
                        </div>

                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

            <style>{`
          
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
