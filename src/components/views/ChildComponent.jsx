import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        console.log("check props: ", this.props);
        let { arrJobs } = this.props;
        let showJobs = this.state.showJobs;
        return (
        <>
                {!showJobs ?
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                : <div>
                    <div className="listJob">
                    {
                    arrJobs.map((item, index) => {
                        return (
                        <div key={item.id}>
                            {item.titleJob} - {item.salary}
                        </div>
                    )
                    })}
                    </div>
                    <button onClick={() => this.handleShowHide()}>Hide</button>
                    </div>
                }
        </>
             );
    }
}

export default ChildComponent;