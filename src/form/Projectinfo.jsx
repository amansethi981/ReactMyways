import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
border-bottom:  0.7px solid grey;
padding: 2rem;
.project-container{
    
}
    .form-field{
        border: none;
        border-bottom: 0.7px solid grey;
        width: 100%;
        font-size: 1.25rem;
        color: black !important;
        font-weight: 100!important;
       
    }
    .form-field-desc{
        border: 0.7px solid grey;
        height: 6rem;
        display: block;
        width: 100%;
        font-size: 1.25rem;
        color: black;
    }
    .project-title{
        width: 40%;
       
    }
    .form-title{
        font-size: 1.4rem;
        color: black;
    }

`;

function ProjectInfo() {
    return (
        <Wrapper className="d-flex flex-column align-items-center project-container">
            <div className="project-title mb-3">
                <div className="form-title">Project Title*</div>
                <input className="form-field" type="text" placeholder="Google Search Engine" />
            </div>
            <div className="project-title d-flex flex-row mb-3">
                <div className=""><div className="form-title">Starting Date</div><input className="form-field" type="date" placeholder="Optical Character Recognition" /></div>
                <div className="ml-auto"><div className="form-title">Ending Date</div><input className="form-field" type="date" placeholder="Optical Character Recognition" /></div>
            </div>
            <div className="project-title mb-3">
                <div className="form-title">Project Description</div>
                <textarea className="form-field-desc" placeholder="Larry Page stole my project. Help!">
                </textarea>
            </div>
            <div className="project-title"><div className="form-title">Project Link:</div>
                <input className="form-field" type="text" placeholder="https://google.com. Yes, I made google" /></div>
        </Wrapper>
    );
}

export default ProjectInfo;
