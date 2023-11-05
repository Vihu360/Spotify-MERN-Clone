// const TextInput = ({
// }) => {
//     return (
//         <div>

//         </div>
//     );
// };


const TextInput = ({ label, placeholder, className, value, setValue}) => {
    return (
      <div className={`flex flex-col space-y-2 ${className}`}>
        <label className="text-white font-semibold" htmlFor={label}>
          {label}
        </label>
        <input
          className="p-2 w-80 bg-black text-white border-gray-400 border-2 rounded hover:border-white"
          type="text"
          placeholder={placeholder}
          id={label}
          value={value}
          setvalue = {setValue}
          onChange={(e)=>{
            setValue(e.target.value)
          }}
        />
      </div>
    );
  };
  

export default TextInput;