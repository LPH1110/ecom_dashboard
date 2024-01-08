import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SelectBox({ title, options }) {
    const [selected, setSelected] = useState(options[0]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <div className="relative">
                    <Listbox.Button className="text-sm font-medium leading-6 text-gray-900 flex items-center gap-2">
                        {title}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Listbox.Button>
                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 min-w-[16rem] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.id}
                                    className={({ active }) =>
                                        classNames(
                                            active ? 'bg-blue-400 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                        )
                                    }
                                    value={option}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <div className="flexStart">{option}</div>

                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-blue-400',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    );
}
