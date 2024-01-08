import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navigates = [
    {
        title: 'Reports',
        hash: '/',
    },
    {
        title: 'Products',
        hash: '/products',
    },
    {
        title: 'Orders',
        hash: '/orders',
    },
    {
        title: 'Customers',
        hash: '/customers',
    },
];

const MainLayout = ({ children }) => {
    return (
        <section className="h-full flex">
            <aside className="border w-[15%]">
                <div className="p-4 flex h-full flex-col gap-4">
                    {navigates.map((navigate) => (
                        <Fragment key={navigate.hash}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'rounded-md px-4 py-3 text-white bg-blue-400'
                                        : 'rounded-md px-4 py-3 hover:text-white hover:bg-blue-400 transition'
                                }
                                to={navigate.hash}
                            >
                                {navigate.title}
                            </NavLink>
                        </Fragment>
                    ))}
                </div>
            </aside>
            {/* Right */}
            <section className="w-full">
                {/* Header */}
                <div className="p-4 flexBetween w-full border-b">
                    {/* Search */}
                    <div className="flexStart bg-gray-100 rounded-md px-2 focus-within:ring-blue-400 ring-2 ring-transparent transition">
                        <span className="text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </span>

                        <input type="text" placeholder="Search" className="bg-transparent p-2" />
                    </div>
                    {/* Account */}
                    <div className="flexCenter gap-2">
                        <h4 className="font-semibold">Alexander</h4>
                        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    </div>
                </div>
                <div className="bg-gray-100 h-full">{children}</div>
            </section>
        </section>
    );
};

export default MainLayout;
