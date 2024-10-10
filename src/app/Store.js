import {configureStore} from '@reduxjs/toolkit'
import { todoreducer } from '../features/todo/todoSlice'
export const Store = configureStore({
    reducer:todoreducer
})    