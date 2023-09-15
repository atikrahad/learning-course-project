
const Select = ({select}) => {
    const { title,} = select;
    return (
        <div className="text-[#1c1b1b99] text-sm" >
            <li>{title}</li>
            
        </div>
    );
};

export default Select;