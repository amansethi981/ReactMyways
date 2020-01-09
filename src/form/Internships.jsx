import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';

class CheckboxExampleRadioGroup extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Form>
                <div className="col-md-4 "> <input className="profile" type="text" placeholder="Profile" /></div>
                <div className="col-md-4 mt-3"> <input className="organisation" type="text" placeholder="Organisation*" /></div> 
                <Form.Field>
                    <div className="col-md-4 mt-3"> Location: <b><input className="Location" type="text" placeholder="Location" />{this.state.value}</b></div>
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Choose this'
                        name='checkboxRadioGroup'
                        value='Work From Home'
                        checked={this.state.value === 'this'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <div className="row">
                <div className="col-md-2 mt-3">Start Date </div> 
                <div className="col-md-2 mt-3"><input className="form-field" type="Date"/></div>
                    <div className="col-md-2 mt-3">End Date </div>
                    <div className="col-md-2 mt-3"><input className="form-field" type="Date"  /></div>
                   
                </div>
                <button className="removebtn ml-5 mt-3" 
                    type="button"
                    variant="warning" size="lg" block
                >Save</button>
                
            </Form>
        )
    }
}
export default CheckboxExampleRadioGroup