import { FiDollarSign, FiBookmark } from "react-icons/fi";
import PropTypes from "prop-types";
const Course = ({ course, handleSelectCourse }) => {
  const { course_img, title, description, price, course_time } = course;
  return (
    <div className="p-3 space-y-3  bg-[#FFF] shadow-lg flex flex-col justify-between  rounded-lg">
      <img className="h-52 rounded-lg" src={course_img} alt="" />
      <h1 className="text-[16px] font-bold">{title}</h1>
      <p className="text-sm text-[#1c1b1b99]">{description}</p>
      <div className="flex justify-between items-center">
        <FiDollarSign className="text-[#1C1B1B]"></FiDollarSign>
        <h4 className="text-[#1c1b1b99] font-medium">Price : {price}</h4>
        <FiBookmark className="text-[#1C1B1B]"></FiBookmark>
        <h4 className="text-[#1c1b1b99] font-medium">
          Credit : {course_time}hr
        </h4>
      </div>
      <button
        onClick={() => handleSelectCourse(course)}
        className="w-full  py-2 rounded-lg text-white hover:bg-[#2f81edbb] bg-[#2F80ED]"
      >
        Select
      </button>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectCourse: PropTypes.func.isRequired,
};

export default Course;
