import React from 'react';

const CreateProductModal = () => {
    return (
        <div className="w-full">
            <form action="" className="w-full">
                <div className="bg-white flex flex-col gap-2">
                    <label htmlFor="product_name">Product name</label>
                    <input
                        type="text"
                        id="product_name"
                        name="product_name"
                        className="w-full py-3 px-4 ring-2 ring-transparent focus:ring-blue-400 transition border rounded-md"
                        placeholder="enter a name"
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateProductModal;
