import { TiTick, TiDelete, TiExportOutline } from "react-icons/ti"
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { Todo } from "@/models/Interfaces";
import { setInProgress, deleteTodo, doneTodo } from "@/redux/features/todosSlice";

interface TodoProp {
  id:number;
  title:string;
  desc:string;
  situation: string;
}

const Task = ({id, title, desc, situation}: TodoProp) => {
  const dispatch = useAppDispatch()
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      
      <div className='flex flex-col items-center py-10'>
        <h5 className='mb-1 text-xl font-medium text-gray-600 dark:text-white'>
          {title}
        </h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          {desc}
        </span>
        <div className='flex mt-4 space-x-3 md:mt-6'>


        <button 
        onClick={() => dispatch(deleteTodo(id))}
        type="button" className="flex justify-center items-center p-2 transition-all duration-400 text-gray-600 bg-white border border-red-300 focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm dark:bg-red-800 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-600 dark:focus:ring-red-700">Del
        <TiDelete size={24} color='red' />
        </button>


       { situation === 'inprogress' && <button 
       onClick={() => dispatch(doneTodo({
        id:id,
        situation:'done'
       }))}
       type="button" className="flex justify-center items-center p-2 transition-all duration-400 text-gray-600 bg-white border border-green-300 focus:outline-none hover:bg-green-100 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm dark:bg-green-800 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-600 dark:focus:ring-green-700">Done
        <TiTick size={24} color='green' />
        </button>}

        { situation === 'new' && <button
        onClick={() => dispatch(setInProgress({
          id:id,
          situation:'inprogress'
        }))}
        type="button" className="flex justify-center items-center p-2 transition-all duration-400 text-gray-600 bg-white border border-blue-300 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 dark:focus:ring-blue-700">Start
        <TiExportOutline size={24} color='blue' />
        </button>}

        </div>
      </div>
    </div>
  );
};

export default Task;
