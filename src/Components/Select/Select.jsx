import PropTypes from "prop-types";

const Select = ({select, }) => {
    const { title,} = select;
    
    return (
        <div className="text-[#1c1b1b99] text-sm" >
            <li>{title}</li>
            
        </div>
    );
};

Select.propTypes = { 
   select:PropTypes.object.isRequired,
}

export default Select;