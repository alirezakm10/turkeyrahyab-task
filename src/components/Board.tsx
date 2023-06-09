'use client'
import { TiPencil } from 'react-icons/ti'
import { useEffect } from 'react'
import Task from './Task'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import FormModal from './FormModal'
import { toggleForm } from '@/redux/features/todosSlice'

const Board = () => {
  const {todos, showForm} = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('this are my tasks: ', todos)
  },[])
  return (
    <section className='relative flex gap-4 justify-around h-screen w-full' >
      {showForm && <FormModal />}
      <section className='relative overflow-y-scroll h-auto flex flex-col items-center gap-3  shadow-md w-full p-3 rounded-md ' >
      <button onClick={() => dispatch(toggleForm())} type="button" className="flex justify-center items-center p-2 transition-all duration-400 text-gray-600 bg-white border border-purple-300 focus:outline-none hover:bg-purple-100 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm dark:bg-purple-800 dark:text-white dark:border-purple-600 dark:hover:bg-purple-700 dark:hover:border-purple-600 dark:focus:ring-purple-700">Add Todo
        <TiPencil size={24} color='purple' />
        </button>
        {todos?.map((todo, i) => (
          todo.situation === 'new' && <Task key={i} title={todo.title} desc={todo.description} id={todo.id} situation={todo.situation} />
        ))}
      </section>
      <section className='relative overflow-scroll h-auto flex flex-col items-center gap-3  shadow-md w-full p-3 rounded-md ' >
        <h1 className='text-xl w-full text-center border-b-2 border-gray-100 py-2' >In Progress</h1>
        {todos?.map((todo, i) => (
          todo.situation === 'inprogress' && <Task key={i} title={todo.title} desc={todo.description} id={todo.id} situation={todo.situation} />
        ))}
      </section>
      <section className='relative overflow-scroll h-auto flex flex-col items-center gap-3  shadow-md w-full p-3 rounded-md ' >
        <h1 className='text-xl w-full text-center border-b-2 border-gray-100 py-2' >Done</h1>
        {todos?.map((todo, i) => (
          todo.situation === 'done' && <Task key={i} title={todo.title} desc={todo.description} id={todo.id} situation={todo.situation} />
        ))}
      </section>

    </section>
  )
}

export default Board