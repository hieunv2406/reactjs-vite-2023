import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id: 'job1', title: 'Dev', salary: '1000'},
            {id: 'job2', title: 'Tester', salary: '2000'},
            {id: 'job3', title: 'PM', salary: '3000'}
        ]
    }

    addNewJob = (job) => {
        console.log('check from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    //xu ly xoa job tren state theo id
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id != job.id);
        this.setState({
            arrJobs: currentJob
        })
    }
    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob}/>
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                    />
            </>
             );
    }
}

export default MyComponent;