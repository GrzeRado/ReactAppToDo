import React, {Component} from 'react';


class ToDoList extends React.Component {
    render() {
        var moja
        {
            name: "Inna"
        };
        return (
            <div className="todoList">
                <h2>Todo list</h2>
                <div class="header">
                    <form onSubmit={Component}>
                        <input placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                        <button type="submit">delete</button>
                    </form>
                </div>
            </div>
        );

    }

}

export default ToDoList;