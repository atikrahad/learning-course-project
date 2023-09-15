import PropTypes from "prop-types";
import Select from "../Select/Select";

const Selected = ({ selectcourse, }) => {
  let count = 0;
  let totalPrice = 0;
   let countNum = 0;
  selectcourse.forEach((item) => {
    count = count + item.course_time;
    totalPrice = totalPrice + item.price;
    countNum = countNum + 1;
  });

  let remaining = 20;
  remaining = remaining - count;

  

  return (
    <div className="w-[25%] ">
      <div className="bg-white space-y-3 rounded-lg shadow-lg p-4">
        <h1 className="text-[#2F80ED] font-bold text-[18px]">Credit Hour Remaining {remaining} hr</h1>
        <hr />
        <h1 className="text-[#1C1B1B] text-[18px] font-bold">Course Name</h1>
        <ol className="list-decimal px-4">
        {selectcourse.map((select) => (
          <Select 
          key={select.id} 
          select={select}
          
          ></Select>
        ))}
        </ol >
        <hr />
        <h2 className="text-[#1c1b1bcc] font-medium">
          Total Credit Hour: {count} hr
        </h2>
        <hr />
        <h2 className="text-[#1c1b1bcc] font-medium">Total Price: {totalPrice} TK</h2>
      </div>
    </div>
  );
};
Selected.propTypes = {
  selectcourse: PropTypes.array.isRequired,
};

export default Selected;
