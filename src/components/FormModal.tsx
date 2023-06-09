import { useState, useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { toggleForm, addTodo } from '@/redux/features/todosSlice';
import OutsideClickHandler from 'react-outside-click-handler';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const FormModal = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const randomId = uuidv4();

  useEffect(() => {
    console.log('title is: ', title)
    console.log('desc is: ', desc)
  },[title, desc])
  return (
    <div className='fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm bg-white/30'>
      <OutsideClickHandler
        onOutsideClick={() => {
          dispatch(toggleForm());
        }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className='relative w-full max-w-2xl max-h-full'>
          <div className='relative p-3 rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-start justify-between p-4 mb-2 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Terms of Service
              </h3>
              <button
                onClick={() => dispatch(toggleForm())}
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='defaultModal'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            {/* title container */}
            <div className='mb-6'>
              <label
                htmlFor='base-input'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Title
              </label>
              <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
                type='text'
                id='base-input'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            {/* description container */}
            <div className='mb-6'>
              <label
                htmlFor='large-input'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Description
              </label>
              <input
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
                type='text'
                id='large-input'
                className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                onClick={() => {dispatch(addTodo([{
                    id:parseInt(randomId),
                    title:title,
                    description:desc,
                    situation:'new'
                }]))
              dispatch(toggleForm())
              }
              }
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Add Todo
              </button>
            </div>
          </div>
        </motion.div>
      </OutsideClickHandler>
    </div>
  );
};

export default FormModal;
