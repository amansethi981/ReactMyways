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

 class EducationQualification extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
       
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

render() {
    return (
        <Wrapper className="d-flex flex-column align-items-center project-container">
            <label>
                Pursing
          <input
                    name="Pursing" 
                    type="checkbox"
                    />
            </label>
            <label>
                Completed
          <input
                    name="Completed"
                    type="checkbox"
                />
            </label>
            <div className="college-name mb-3">
                <div className="form-college">College*
                <input className="form-field" type="text" placeholder="College Name" />
            </div>
            <div className="Education d-flex flex-row mb-5">
                <div className=""><div className="form-education">Starting Date</div><input className="form-field" type="date" placeholder="Optical Character Recognition" /></div>
                <div className="ml-auto"><div className="form-education1">Ending Date</div><input className="form-field1" type="date" placeholder="Optical Character Recognition" /></div>
            </div>
            <div className="college-name mb-3">
                <div className="form-college">Degree*</div>
                <input className="form-field" type="text" placeholder="Degree Name" />
            </div>
            <div className="stream">Stream*
            <label className="optional"> 
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Electronics and Communication">Electronics and Communication</option>
                <option value="Electrical">Electrical</option>
                <option value="Other">Other</option>
            </select>
            </label>
                </div>
            </div>
            
        </Wrapper>
    );
}
}

export default EducationQualification;
