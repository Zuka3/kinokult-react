import React, { Component } from "react";
import Projects from "../Project/Project";
import { projectData } from "../../datas/projectData";

export default class ProjectList extends Component {
  state = {
    projects: projectData,
  };

  removeProject = (id) => {
    const { projects } = this.state;
    const sortedProjects = projects.filter((project) => project.id !== id);
    this.setState({
      projects: sortedProjects,
    });
  };
  render() {
    const { projects } = this.state;

    return (
      <section className="row">
        {projects.map((project) => (
          <Projects
            key={project.id}
            project={project}
            removeProject={this.removeProject}
          ></Projects>
        ))}
      </section>
    );
  }
}
