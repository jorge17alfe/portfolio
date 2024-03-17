import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";

import img from "../../img/jl4.png";
import Header from "@/Components/Header";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    var title = "https://alocraise.com";
    return (
        <>
            <Head title="Welcome" />
            <Header img auth />
       

            <div className=" sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker  bg-center bg-indigo-50 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end"></div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center ">
                        <ApplicationLogo className="h-20 " />
                    </div>

                    <div className="mt-16 ">
                        <a
                            href={title}
                            className="flex flex-col md:flex-row scale-100 p-2 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20  motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
                        >
                            <figure className="justify-center text-center  me-1">
                                <img src={img} className="mb-5" alt="" />
                                <figcaption>
                                    {" "}
                                    <p>
                                        <hr /> Jorge Ordóñez <hr />{" "}
                                        <b>Developer Freelance</b> <hr />
                                    </p>
                                </figcaption>
                            </figure>
                            <div className="p-10 bg-indigo-50 rounded m3-3">
                                <div className=""></div>

                                <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                    Sobre mi
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
