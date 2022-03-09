const AddSin = ({ onChangeText, addSin, value }) => {
  return (
    <div className="sin">
      <input type="text" onChange={onChangeText} value={value} />
      <button onClick={addSin}>Add Sin</button>
    </div>
  );
};

export default AddSin;
