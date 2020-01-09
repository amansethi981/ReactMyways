import React from "react";
import ReactDOM from "react-dom";
import ProjectInfo from '../form/Projectinfo';
import styled from 'styled-components';

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
              <ProjectInfo/>
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
          <button className="small">Submit</button>
          </div>
         
        </form>
        </Wrapper>
      );
    }
  }