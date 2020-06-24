import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: true,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    console.log(this.props);
    const { id, name, image, duration, navigation } = this.props.project;
    const { removeProject } = this.props;

    return (
      <div class="col-md-3 col-6">
        <a>
          <div class="portfolio-item">
            <img className="w-100" src={image} alt="project-1" />
          </div>
          <h5 className="font-weight-normal">{name}</h5>
          <p>{duration}</p>
          <i
            className="fas fa-window-close"
            onClick={() => removeProject(id)}
          ></i>
          <br />
          <i className="fas fa-caret-square-down" onClick={this.handleInfo}></i>
          {this.state.showInfo && <p>{navigation}</p>}
        </a>
      </div>
    );
  }
}
