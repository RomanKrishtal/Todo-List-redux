import ToDoList from './features/ToDoList.jsx'
import AddPostForm from './features/AddPostForm.jsx'
import Footer from './features/Footer.jsx'
import { useSelector } from 'react-redux'

function App() {
  let dark = useSelector(state => state.mode.darkTheme)
  if (dark) {
    document.body.style.backgroundColor = "black"
  } else {
    document.body.style.backgroundColor = ""
  }
  return (
    <>
    <AddPostForm />
    <ToDoList />
    <Footer />
    </>
  )
}

export default App
