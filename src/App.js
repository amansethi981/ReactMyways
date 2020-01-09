import React from "react";
import ReactDOM from "react-dom";
import ProjectInfo from './form/Projectinfo';
import EducationQualification from './form/EducationQualification';
import PostionRespons from'./form/postionresponsibility';
import styled from 'styled-components';
import   './sass/mysass.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'popper.js'
import 'jquery';
import Skill from "./form/skill";
import WorkSample from"./form/workSample";
import Internship from"./form/Internships";
const Wrapper = styled.div`
  .projects{
    position: relative;
  }
  .remove{
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export default class DynamicProjectForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      projects: [{ name: "" }]
    };
  }

  handleProjectNameChange = idx => evt => {
    const newShareholders = this.state.projects.map((project, sidx) => {
      if (idx !== sidx) return project;
      return { ...project, name: evt.target.value };
    });

    this.setState({ projects: newShareholders });
  };

  handleSubmit = evt => {
    const { name, projects } = this.state;
    alert(`Added: ${name}${projects.length} projects`);
  };

  handleAddProject = () => {
    this.setState({
      projects: this.state.projects.concat([{ name: "" }])
    });
  };

  handleRemoveProject = idx => () => {
    this.setState({
      projects: this.state.projects.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          {/* ... */}
          {this.state.projects.map((project, idx) => (
            <div className="projects">
              <ProjectInfo />
              <button
                type="button"
                onClick={this.handleRemoveProject(idx)}
                className="remove small"
              >Remove</button>
            </div>

          ))}
          <div className="d-flex justify-content-center mt-3">
            <button
              type="button"
              onClick={this.handleAddProject}
              className="small mr-3"
            >
              Add Project
          </button>
        
            <button
              type="button"
              onClick={this.handleAddProject}
              className="small mr-3"
            >
              Next
          </button>
            <button className="small">Submit</button>
          </div>
          <div className="projects">
            < EducationQualification/>
            </div>
          <div className="projects">
            < PostionRespons />
          </div>
          <div className="projects">
            < Skill />
          </div>
          <div className="projects">
            < WorkSample />
          </div>
          <div className="projects">
            < Internship />
          </div>

        </form>
      </Wrapper>
    );
  }
}