import Select from "react-select";

const SelectComponent = ({title, ...rest}) => {
    return (
        <div className="flex items-center">
            <span className="block mr-3">{title}</span>
            <Select className="w-60" {...rest} />
        </div>
    );
}
 
export default SelectComponent;