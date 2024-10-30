import './Collaborator.css'

const Collaborator = ( { name, cargo, image}) => {
    return (
        <div className='collaborator'>
            <div className='header'>
                <img src={ image } alt={ name } />
            </div>
            <div className='footer'>
                <h4> { name }</h4>
                <h5> { cargo } </h5>
            </div>
        </div>
    )
};

export default Collaborator;