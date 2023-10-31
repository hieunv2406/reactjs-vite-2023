import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
state = {
        arrJobs: [
            {id: 'job1', titleJob: 'Dev', salary: '1000$'},
            {id: 'job2', titleJob: 'Tester', salary: '2000$'},
            {id: 'job3', titleJob: 'PM', salary: '3000$'}
        ]
    }
    render() {
        console.log("check state: ", this.state);
        return (
            <>
                <AddComponent />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
             );
    }
}

export default MyComponent;