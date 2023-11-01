import React from "react";
class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }
    handleOnChangeTitleJob = (event) => {
        this.setState (
            {
                title: event.target.value
            }
        )
    }
    handleOnChangeSalary = (event) => {
        this.setState (
            {
                salary: event.target.value
            }
        )
    }
    handleSubmit = () => {
        if (!this.state.title || !this.state.salary) {
            alert('Input required!!!')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 101),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
            <label>Form Input:</label> <br/>
            <label>Title Job</label> <br/>
            <input type="text" value={this.state.title} onChange={(event) => this.handleOnChangeTitleJob(event)}/> <br/>
            <label>Salary</label> <br/>
            <input type="text" value={this.state.salary} onChange={(event) => this.handleOnChangeSalary(event)}/> <br/>
            <input type="submit" value={"submit"} onClick={() => this.handleSubmit()}/> <br/>
            <label>My name is {this.state.title} {this.state.salary}</label> <br/>
            </>
        )
    }
}
export default AddComponent;