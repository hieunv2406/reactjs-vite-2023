import React from 'react'

class AddTodo extends React.Component {
    state = { 
        id: '',
        title: '',
        times: ''
    }
    handleAddTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTimes = (event) => {
        this.setState({
            times: event.target.value
        })
    }
    handleSave = () => {
        if (!this.state.title || !this.state.times) {
            alert('input required !!!');
            return;
        }
        this.props.addNewTodo({
            id: Math.floor(Math.random() * 101),
            title: this.state.title,
            times: this.state.times
        });
        this.setState({
            title: '',
            times: ''
        });
    }
    render() { 
        return (
            <>
                <div>Form add todo:</div>
                <div>
                    <h4>Title</h4>
                    <input type="text" onChange={(event) => this.handleAddTitle(event)} value={this.state.title} placeholder='Title'/>
                </div>
                <div>
                    <h4>Times</h4>
                    <input type="date" onChange={(event) => this.handleAddTimes(event)} value={this.state.times} placeholder='Times'/>
                </div>
                {
                    this.state.title && <p>Todo: {this.state.title} - {this.state.times}</p>
                }
                <button type='submit' onClick={() => this.handleSave()}>Save</button>
            </>
            
        );
    }
}
 
export default AddTodo;