import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
    { label: "Java", value: 1 },
    { label: "C++", value: 2 },
    { label: "React-JS", value: 3 },
    { label: "Angular", value: 4 },
    { label: "Mongo DB", value: 5 },
    { label: "Node JS", value: 6 },
    { label: "Data Structure", value: 7 },
    { label: "Ajax", value: 8 },
    { label: "Sql", value: 9 },
    { label: "My Sql", value: 10 },
    { label: "Javascript", value: 11 },
    { label: "Html", value: 12},
];

const App = () => (
    <div className="container">
    
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <Select options={techCompanies}
                    isMulti />

            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
);

export default App