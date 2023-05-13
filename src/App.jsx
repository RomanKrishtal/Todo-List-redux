import ToDoList from './features/ToDoList.jsx'
import AddPostForm from './features/AddPostForm.jsx'

function App() {
  return (
    <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
    <AddPostForm />
    </div>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
    <ToDoList />
    </div>
    </div>
  )
}

export default App
