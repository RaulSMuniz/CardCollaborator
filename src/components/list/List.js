import './List.css'

const List = (props) => {
    return (
        <div className="lista">
            <label>{props.label}</label>
            <select onChange={event => props.onChanges(event.target.value)} required={props.notnull} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default List;