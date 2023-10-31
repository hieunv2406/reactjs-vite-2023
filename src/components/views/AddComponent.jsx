import React from "react";
class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: ''
    }
    handleOnChangeTitleJob = (event) => {
        this.setState (
            {
                titleJob: event.target.value
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
        alert("Hi")
    }

    render() {
        return (
            <>
            <div>Hello Add component</div>
            <label>Form Input:</label> <br/>
            <label>Title Job</label> <br/>
            <input type="text" value={this.state.titleJob} onChange={(event) => this.handleOnChangeTitleJob(event)}/> <br/>
            <label>Salary</label> <br/>
            <input type="text" value={this.state.salary} onChange={(event) => this.handleOnChangeSalary(event)}/> <br/>
            <input type="submit" value={"submit"} onClick={() => this.handleSubmit()}/> <br/>
            <label>My name is {this.state.titleJob} {this.state.salary}</label> <br/>
            </>
        )
    }
}
export default AddComponent;