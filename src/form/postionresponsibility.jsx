import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/js/bootstrap.bundle.min';

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

function postionresponsibility() {
    return (
        <Wrapper className="d-flex flex-column align-items-center postion-container">
            <h1>POR</h1>
            <h2> Do You want to add any postion of responsibility?</h2>
            <div className="project-title mb-3">
                <div className="form-title">Description (Max 250 char)</div>
                <input className="form-field" type="text" placeholder="Project in 2020 for Delhi Region" />
            </div>
            <button className="removebtn"
                type="button"
                variant="warning" size="lg" block
            >Save</button>

        </Wrapper>
    );
}

export default postionresponsibility ;
