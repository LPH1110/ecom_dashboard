'use client';

import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const ComboDropdown = ({ categories, title }) => {
    console.log(categories);
    const [selected, setSelected] = useState(categories[0]);
    const [query, setQuery] = useState('');
    const filtered =
        query === ''
            ? categories
            : categories.filter((item) => {
                  return item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
              });
    return (
        <Combobox value={selected} onChange={setSelected}>
            <div className="relative">
                <div className="text-txt-gray h-full w-full flex items-center gap-2 pl-3 pr-1 ">
                    <Combobox.Button className="flex items-center w-full">
                        <Combobox.Input
                            readOnly
                            displayValue={title}
                            onChange={(e) => setQuery(e.target.value)}
                            className="bg-transparent w-full"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Combobox.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options className="bg-white rounded-xl shadow-lg absolute right-0 py-4 inset-x-0 min-w-[10rem] z-[999]">
                        <ul className="w-full">
                            {filtered.map((item, index) => (
                                <Fragment key={index}>
                                    <li className="py-2 w-full text-left hover:text-ocean transition cursor-pointer">
                                        <Combobox.Option className="px-4 inline-block w-full" value={item}>
                                            {selected === item ? <span className="text-blue-400">{item}</span> : item}
                                        </Combobox.Option>
                                    </li>
                                </Fragment>
                            ))}
                        </ul>
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    );
};

export default ComboDropdown;
