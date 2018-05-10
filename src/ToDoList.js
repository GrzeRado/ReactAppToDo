import React, {Component} from 'react';


class ToDoList extends Component {
    render() {
        return (
            <div className="todoList">
                <h1>Lorem ipsum</h1>
                <div class="header">
                    <form>
                        <input placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );

    }

}


export default ToDoList;