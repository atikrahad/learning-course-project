import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/course";
import PropTypes from "prop-types";

const Courses = ({ handleSelectCourse }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3 w-[80%]">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelectCourse={handleSelectCourse}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelectCourse: PropTypes.func.isRequired
};

export default Courses;
