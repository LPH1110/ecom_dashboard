import React, { Fragment, useState } from 'react';
import { v4 } from 'uuid';
import ComboDropDown from '~/components/ComboDropDown';
import Modal from '~/components/Modal';
import SelectBox from '~/components/SelectBox/SelectBox';
import Selection from '~/components/SelectBox/SelectBox';

const products = [
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 0,
        price: 123124,
        category_name: "Women's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
    {
        id: v4(),
        name: 'Brandix Chainsaw Air compressor',
        description: 'Lorem ipsuma asuma 0931HASD',
        stock: 90000,
        price: 12312511,
        category_name: "Men's clothing",
    },
];

const headings = [
    {
        id: v4(),
        title: 'Product',
    },
    {
        id: v4(),
        title: 'Category',
    },
    {
        id: v4(),
        title: 'Stock',
    },
    {
        id: v4(),
        title: 'Price',
    },
];

const categories = {
    Category: ['All category', 'Option 1', 'Option 2', 'Option 3'],
    Product: ['All category', 'Option 1', 'Option 2', 'Option 3'],
    Stock: ['All category', 'Option 1', 'Option 2', 'Option 3'],
    Price: ['All category', 'Option 1', 'Option 2', 'Option 3'],
};

const Products = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <section className="p-4 space-y-4">
            {/* Header */}
            <div className="flexBetween">
                <h1 className="text-xl font-semibold">Products</h1>
                <div className="flexEnd gap-4">
                    {/* Search */}
                    <div className="flexStart bg-white rounded-md px-2 focus-within:ring-blue-400 ring-2 ring-transparent transition">
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
                    <button
                        type="button"
                        onClick={() => setOpenModal(true)}
                        className="px-4 py-3 text-white rounded-md bg-blue-400 hover:bg-blue-400/80 transition"
                    >
                        Add new product
                    </button>
                </div>
            </div>
            <div className="h-[32rem] overflow-auto">
                <table className="border-collapse border bg-white w-full rounded-lg">
                    <tbody>
                        <tr>
                            {headings.map((heading) => (
                                <th className="font-normal text-sm text-gray-600 text-start p-4 items-center">
                                    <div className="flex items-center gap-1">
                                        <SelectBox title={heading.title} options={categories[heading.title]} />
                                    </div>
                                </th>
                            ))}
                        </tr>
                        {products.map((prod) => (
                            <Fragment key={prod.id}>
                                <tr className="text-sm">
                                    <td className="flexStart gap-4 p-4">
                                        <div className="bg-gray-300 rounded-md w-10 h-10">{/* Thumbnail */}</div>
                                        <div>
                                            <h4 className="capitalize font-semibold">{prod?.name}</h4>
                                            <p className="text-gray-500">{prod?.description}D</p>
                                        </div>
                                    </td>
                                    <td className="p-4">{prod?.category_name}</td>
                                    <td className="p-4">
                                        <span className="py-2 px-3 rounded-full bg-yellow-300">
                                            {prod?.stock > 0 ? `${prod.stock} in stock` : 'Out of stock'}
                                        </span>
                                    </td>
                                    <td className="p-4">12312312</td>
                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal open={openModal} setOpen={setOpenModal} action="create-new-product" />
        </section>
    );
};

export default Products;
