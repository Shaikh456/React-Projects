# Basic differnce between redux and react-redux
There is the difference between redux and react-redux

redux is a core liabrary

react-redux is a wrapper library that connects react with redux  

# AI created notes
The steps of react-redux is
1. Connect the component to the store
2. The store will dispatch the action to the reducer
3. The reducer will return the new state
4. The store will update the state
5. The component will re-render with the new state
6. The component will call the mapStateToProps function to get the new state
7. The mapStateToProps function will return the new state
8. The component will use the new state to render the UI
9. The component will call the mapDispatchToProps function to get the new props
10. The mapDispatchToProps function will return the new props
11. The component will use the new props to render the UI
12. The component will call the shouldComponentUpdate function to check if the component should update

# My notes(Store)
1. Redux is a state management library that helps you manage global state by using a (single source of truth )
2. Basically make file name store and in it import {configureStore} - (it is a function that consist of object) for making store
3. Every project consist of single store which is also called as ("Single Source of truth")

# (Reducer)
1. Reducer is a function that takes the state and action as arguments and returns a new state
2. Then make reducer file and import it in store file
3. The reducer file contains the functions or features or basically functionality to send props to the component
4. I Reducer for making slice it consist of slice function it can be directly imported{createSlice} 
Syntax: createSlice({
    name: 'any name';
    initialState'
    reducers: {
        // action type
        // action type
            Suppose
        addTodo:(state, action) =>{
            state.push(action.payload)
        }

    }
})

# useDispatch Syntax
import {useDispatch} from 'react-redux'
const dispatch = useDispatch()

# useSelector Syntax
import {useSelector} from 'react-redux'
const state = useSelector((state) => state)