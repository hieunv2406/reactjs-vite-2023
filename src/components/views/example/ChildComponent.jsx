import React from "react";
import "./ChildCss.scss";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  //xu ly nut delete
  handleDelete = (job) => {
    console.log("delete: ", job);
    //truyen job can xoa len props, de xu ly tren thang cha
    this.props.deleteJob(job);
    alert("delete");
  };
  render() {
    let { arrJobs } = this.props;
    let showJobs = this.state.showJobs;
    return (
      <>
        {!showJobs ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <div>
            <div className="listJob">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}${" "}
                    <span onClick={() => this.handleDelete(item)}>
                      <button>X</button>
                    </span>
                  </div>
                );
              })}
            </div>
            <button className="btn-hide" onClick={() => this.handleShowHide()}>
              Hide
            </button>
          </div>
        )}
      </>
    );
  }
}

export default ChildComponent;
