import React from react;
import ToDoList from './ToDoList';
import Todo from './Todo';
import TodoForm from './TodoForm';

window.id=0;

class TodoApp extends React.Component{
    constructor(props);
    super(props);

    this.state = {
        data:[]
    }
    this.apiUrl = 'https://console.firebase.google.com/project/user-data-react/database/user-data-react/data/todos'

}

componentDidMount(){
    axios.get(this.apiUrl)
        .then((res) => {
            // Set state with result
            this.setState({data:res.data});
        });
}

addTodo(val){
    const Todo = {text: val}
    axios.post(this.apiUrl, todo)
        .then((res) => {
            this.state.data.push(res.data);
            this.setState({data: this.state.data});
        });
    }

    handleRemove(id){
        const leave = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
            });
        this.setState({data: leave});

        axios.delete(this.apiUrl+'/'+id)
        .then((res) => {
            this.setState({data: remainder});
        })

}

render(){
        return(
    <div>
<ToDoList todoCount={this.state.data.length}/>
            <TodoForm addTodo={this.addTodo.bind(this)}/>
    <TodoList
        todos={this.state.data}
        remove={this.handleRemove.bind(this)}
    />
    </div>
);
}

export default TodoApp;