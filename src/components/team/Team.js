import Collaborator from '../collaborator/Collaborator';
import './Team.css'

const Team = (props) => {
    const backgroundColor = { backgroundColor: props.secondaryColor }
    const borderColor = { borderColor: props.primaryColor }

    return (
        (props.colaboradores.length > 0) &&
        <section className="team" style={backgroundColor}>
            <h3 style={borderColor}> {props.name} </h3>
            <div className="collaborators">
                {props.colaboradores.map(colaborador => <Collaborator
                    key={colaborador.nome}
                    primaryColor={props.primaryColor}
                    name={colaborador.nome}
                    cargo={colaborador.cargo}
                    image={colaborador.imagem} />)}
            </div>
        </section>
    );
};

export default Team;