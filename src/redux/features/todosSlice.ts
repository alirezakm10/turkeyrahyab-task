import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "@/models/Interfaces"



type TodosState = {
  showForm:boolean,
  todos : Todo[]
}
type ProgressPayload = {
  id:number,
  situation:string
}

type DonePayload = {
  id:number,
  situation:string
}

const initialState = {
  showForm:false,
  todos:[
    {
      id:1,
      title:'task x',
      description:'Wash your dishes in the evening.',
      situation:'new'
    },
    {
      id:2,
      title:'task x',
      description:'Meet at the restaurant this weekend',
      situation:'done'
    },
    {
      id:3,
      title:'task x',
      description:'Send gifts on Xmas',
      situation:'new'
    },
    {
      id:4,
      title:'task x',
      description:'Give food to the stray cat.',
      situation:'done'
    },
    {
      id:5,
      title:'task x',
      description:'Clean your bedroom.',
      situation:'done'
    },
    {
      id:6,
      title:'task x',
      description:'Watch the news every morning.',
      situation:'new'
    },
  ]
} as TodosState

export const todos = createSlice({
  name:'todos',
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm
    },
    addTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todos =[...state.todos,...action.payload]
    },
    setInProgress: (state, action:PayloadAction<ProgressPayload>) => {
      const { id, situation } = action.payload;
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].situation = situation;
      }
    },
    deleteTodo: (state, action:PayloadAction<number>) => {
      const todoId = action.payload
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    doneTodo : (state, action:PayloadAction<DonePayload>) => {
      const { id, situation } = action.payload
      const todoIndex = state.todos.findIndex(todo => todo.id === id)
      if(todoIndex !== -1){
        state.todos[todoIndex].situation = situation
      }
    }
  }
})

export const {
  toggleForm,
  addTodo,
  setInProgress,
  deleteTodo,
  doneTodo
} = todos.actions

export default todos.reducer