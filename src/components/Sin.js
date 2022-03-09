const  Sin = ({onChangeCheckbox, deleteSin, label, value, uid}) => {
    return (
        <div className="sin">
            <input type="checkbox" checked={value} onChange={onChangeCheckbox} data-uid={uid} />
            <span>{label}</span>
            <button onClick={deleteSin} data-uid={uid}>Delete</button>
        </div>
    )
};

export default Sin;

