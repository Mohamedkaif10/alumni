import TodoList from "./pages/Homepage"
import {Fragment, useEffect} from "react"
function App() {
  useEffect(() => {
    document.title = 'Kaif-to-do-list';
  }, []);

const TITLE = 'Kaif-to-do-list'
  return(
    <Fragment>
       <TodoList  />
      <title>{ TITLE }</title>
    </Fragment>
   
  ) 
}

export default App;