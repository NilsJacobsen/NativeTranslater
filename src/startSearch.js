import Link from 'next/link'

import { Fragment, useState } from 'react'
import {
  EmojiHappyIcon,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  PaperClipIcon,
  ThumbUpIcon,
  XIcon,
  ArrowSmRightIcon,
} from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: EmojiHappyIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: EmojiSadIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: ThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StartSearch({search}) {
  const [selected, setSelected] = useState(moods[5]);
  const [input, setInput] = useState("");

  return (
    <div className="-mt-20 w-1/2">
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <div className='h-24 block w-full py-3 px-3 border-0 resize-none focus:ring-0 focus:outline-none sm:text-sm bg-white'>
                {search.search}
            </div>
            
            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2 bg-white" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
            <div className="flex items-center space-x-5 h-7 self-end">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 w-10 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500 font-bold"
                >
                  DE
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <ArrowSmRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <div className="flex items-center">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="sr-only">Target Language</Listbox.Label>
                      <div className="relative">
                        <Listbox.Button className="relative -m-2.5 w-10 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500">
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                              <span className='font-bold'>
                                EN
                                <span className="sr-only">Add your mood</span>
                              </span>
                            ) : (
                              <span>
                                <span
                                  className={classNames(
                                    selected.bgColor,
                                    'w-8 h-8 rounded-full flex items-center justify-center'
                                  )}
                                >
                                  <selected.icon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true" />
                                </span>
                                <span className="sr-only">{selected.name}</span>
                              </span>
                            )}
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 -ml-6 w-60 bg-white shadow rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            {moods.map((mood) => (
                              <Listbox.Option
                                key={mood.value}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'bg-gray-100' : 'bg-white',
                                    'cursor-default select-none relative py-2 px-3'
                                  )
                                }
                                value={mood}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={classNames(
                                      mood.bgColor,
                                      'w-8 h-8 rounded-full flex items-center justify-center'
                                    )}
                                  >
                                    <mood.icon
                                      className={classNames(mood.iconColor, 'flex-shrink-0 h-5 w-5')}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="ml-3 block font-medium truncate">{mood.name}</span>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
            <div className="flex-shrink-0">
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
