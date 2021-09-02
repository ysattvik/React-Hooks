import logo from './logo.svg';
import React ,{Component, useState,useReducer} from 'react'
import './App.css';
import PostList from './Http/PostList';
import PostForm from './Http/PostForm';
import Form from './TodoApplication/Form';
import TodoList from './TodoApplication/TodoList';
import ClassCounter from './HooksComponent/ClassCounter';
import Hookscounter from './HooksComponent/Hookscounter';
import HooksCounterTwo from './HooksComponent/HooksCounterTwo';
import Hookscounterthree from './HooksComponent/Hookscounterthree';
import MergeName from './HooksComponent/MergeName';
import HooksCounterFour from './HooksComponent/HooksCounterFour';
import ClassCounterOne from './HooksComponent/ClassCounterOne';
import UseEffectCounterOne from './HooksComponent/UseEffectCounterOne';
import ClassMouse from './HooksComponent/ClassMouse';
import HookMouse from './HooksComponent/HookMouse';
import MouseContainer from './HooksComponent/MouseContainer';
import IntervalClassCounter from './HooksComponent/IntervalClassCounter';
import IntervalHooksCount from './HooksComponent/IntervalHooksCount';
import DataFetching from './HooksComponent/DataFetching';
import ComponentC from './HooksComponent/ComponentC';
import CounterOne from './HooksComponent/CounterOne';
import CounterTwo from './HooksComponent/CounterTwo';
import CounterThree from './HooksComponent/CounterThree';
import DataFetchingOne from './HooksComponent/DataFetchingOne';
import DatafetchingTwo from './HooksComponent/DatafetchingTwo';
// import ParentComponent from './HooksComponent/ParentComponent';
// import Counter  from './HooksComponent/Counter';
import FocusInput from './HooksComponent/FocusInput';
import ClassTimer from './HooksComponent/ClassTimer';
import HookTimer from './HooksComponent/HookTimer';
import DocTitleOne from './CustomHook/DocTitleOne';
import DocTitleTwo from './CustomHook/DocTitleTwo';
import CounterByCustomHook from './CustomHook/CounterByCustomHook';
import CounterByCustomHook1 from './CustomHook/CounterByCustomHook1';
import useCounter from './CustomHook/useCounter';
import UserForm from './CustomHook/UserForm';
import useInput from './CustomHook/useInput';


// import ComponentA from './HooksComponent/ComponentA';
// import ComponentD from './HooksComponent/ComponentD';
// import ComponentF from './HooksComponent/ComponentF';


// export const UserContext=React.createContext()
// export const ChannelContext=React.createContext()

// export const CountContext=React.createContext()
// const initialState=0
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//             return state+1
//         case 'decrement':
//             return state-1
//         case 'reset'    :
//             return initialState
//             default:
//                 return state

//     }
// }

function App() {
  // const[inputText,setInputText]=useState("")
  // const[todos, setTodos]=useState([])
  // const[count,dispatch] = useReducer(reducer,initialState)
  return (
    // <CountContext.Provider
    // value={{countState:count,countDispatch:dispatch}}
    // >
    <div className="App">
      <UserForm/>
      <useInput/>
      {/* <useCounter/>
      <CounterByCustomHook/>
      <CounterByCustomHook1/> */}
     {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <HookTimer/> */}
    {/* <ClassTimer/> */}
      {/* <FocusInput/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <DatafetchingTwo/> */}
      {/* <DataFetchingOne/> */}
      {/* Count-{count}
      <ComponentA/>
      <ComponentD/>
      <ComponentF/> */}
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne/> */}
      {/* <UserContext.Provider value={'Vishwash'}>
        <ChannelContext.Provider value={'Codevolution'}>
      <ComponentC/>
      </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching/> */}
      {/* <IntervalHooksCount/> */}
      {/* <IntervalClassCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <UseEffectCounterOne/> */}
      {/* <ClassCounterOne/> */}
      {/* <HooksCounterFour/> */}
      {/* <MergeName/> */}
      {/* <Hookscounterthree/> */}
      {/* <HooksCounterTwo/> */}
      {/* <Hookscounter/> */}
      {/* <ClassCounter/> */}
      {/* <header>
        <h1>ysattvik Todo List</h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} setInputText={setInputText}/>
      <TodoList/> */}
      {/* <PostForm/> */}
      {/* <PostList/> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
