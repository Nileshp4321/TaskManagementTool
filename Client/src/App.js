import { ToastContainer } from "react-toastify"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { Toaster } from "react-hot-toast"


function App() {
  return (
   <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> } />
      <Route path="/taskform" element={ <TaskForm/> } />
      <Route path="/taskList" element={ <TaskList/> } />
    </Routes>
    <ToastContainer autoClose={1000} theme="dark" />
    <ToastContainer autoClose={1000} theme="dark" />
    {/* <Toaster /> */}
    </BrowserRouter>
   </>
  )
}
export default App