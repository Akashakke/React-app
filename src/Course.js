import React from 'react';

function Course(props) {
  return (
    <div className="card">
  <h5 className="card-header">Course name</h5>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.desc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  );
}

export default Course;