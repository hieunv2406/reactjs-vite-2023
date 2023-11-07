import React from "react";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {

    state = {
        btnAdd: false,
        btnEdit: true,
        listTodo: [
        ],
        todoSelected: {
            id: '',
            title: '',
            times: ''
        }
    }
    handleShowHideFormAdd = () => {
        let { btnAdd } = this.state;
        this.setState({
            btnAdd: !btnAdd
        })
    }
    addNewTodo = (todo) => {
        let { listTodo } = this.state;
        this.setState({
            listTodo: [...listTodo, todo]
        })
    }
    handleDelete = (id) => {
        let { listTodo } = this.state;
        let currentTodo = listTodo;
        currentTodo = currentTodo.filter(item => item.id != id);
        this.setState({
            listTodo: currentTodo
        })
    }
    handleChangeTitle = (event) => {
        let { todoSelected } = this.state;
        let editTodo = { ...todoSelected };
        editTodo.title = event.target.value;
        this.setState({
            todoSelected: editTodo
        })
    }
    handleChangeTime = (event) => {
        let { todoSelected } = this.state;
        let editTodo = { ...todoSelected };
        editTodo.times = event.target.value;
        this.setState({
            todoSelected: editTodo
        })
    }
    handleSaveChange = (item) => {
        let { btnEdit, listTodo, todoSelected } = this.state;
        if (!btnEdit && item.id === todoSelected.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex((obj => obj.id === item.id));
            listTodoCopy[objIndex].title = todoSelected.title;
            listTodoCopy[objIndex].times = todoSelected.times;
            this.setState({
                btnEdit: !btnEdit,
                listTodo: listTodoCopy
            })
            return;
        }
        this.setState({
            btnEdit: !btnEdit,
            todoSelected: {
                id: item.id,
                title: item.title,
                times: item.times
            }
        })
    }

    render() {
        return (
            <>
                <h1>TODO List</h1>
                {!this.state.btnAdd ? <div><button className="btn-add" onClick={() => this.handleShowHideFormAdd()}>Open form add</button></div>
                    : <div><button className="btn-add" onClick={() => this.handleShowHideFormAdd()}>Hide form</button></div>
                }
                {this.state.btnAdd &&
                    <AddTodo addNewTodo={this.addNewTodo} />
                }
                {this.state.listTodo.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {
                                !this.state.btnEdit && item.id === this.state.todoSelected.id ?
                                    <div>
                                        <input type="text" value={this.state.todoSelected.title} onChange={(event) => this.handleChangeTitle(event)} placeholder="title" />
                                        <input type="date" value={this.state.todoSelected.times} onChange={(event) => this.handleChangeTime(event)} />
                                    </div>
                                    :
                                    <div> {index + 1} - {item.title} - {item.times} </div>
                            }
                            <button onClick={() => this.handleSaveChange(item)}>
                                {
                                    !this.state.btnEdit && item.id === this.state.todoSelected.id ? 'Save' : 'Edit'
                                }
                            </button>
                            <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                        </div>
                    );
                })}
            </>
        )
    }
}

export default ListTodo;