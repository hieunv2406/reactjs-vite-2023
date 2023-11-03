import React from "react";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
 
    state = {
        btnAdd: false,
        btnEdit: false,
        listTodo: [
        ],
        todoChoice: {
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
    handleShowEdit = (item) => {
        let { btnEdit } = this.state;
        this.setState({
            btnEdit: !btnEdit
        })
        console.log('btn-edit', btnEdit);
        this.setState({
            todoChoice: {
                id: item.id,
                title: item.title,
                times: item.times
            }
        })
    }
    handleChangeTitle = (event) => {
        this.setState({
            todoChoice: {
                title: event.target.value
            }
        })
    }
    handleChangeTime = (event) => {
        this.setState({
            todoChoice: {
                times: event.target.value
            }
        })
    }
    handleSaveChange = (id) => {
        let { listTodo, todoChoice, btnEdit } = this.state;
        let newListTodo = listTodo.filter(item => item.id !== id)
        this.setState({
            listTodo: [newListTodo, todoChoice],
            btnEdit: !btnEdit
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
                                this.state.btnEdit && item.id === this.state.todoChoice.id ?
                                    <div>
                                        <input type="text" value={this.state.todoChoice.title} onChange={(event) => this.handleChangeTitle(event)} placeholder="title"/>
                                        <input type="date" value={this.state.todoChoice.times} onChange={(event) => this.handleChangeTime(event)} />
                                    </div>
                                    : <div> {index + 1} - {item.title} - {item.times} </div>
                            }
                            {
                                !this.state.btnEdit ?
                                    <button key={item.id} onClick={() => this.handleShowEdit(item)}>Edit</button>
                                    : <button key={item.id} onClick={() => this.handleSaveChange(item.id)}>Save</button>
                            }
                                <button key={item.id} onClick={() => this.handleDelete(item.id)}>Delete</button>
                        </div>
                    );
                })}
            </>
        )
    }
}

export default ListTodo;