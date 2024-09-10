import './App.css';
import TodoContainerComponent from './Todo/TodoContainerComponent';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>


function App() {
    return(
        <>
            <h1 className = "text-center">To-Do Application</h1>
            <TodoContainerComponent />
        </>
    );
}
export default App;
