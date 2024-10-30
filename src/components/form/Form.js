import { useState } from 'react';
import Button from '../button/Button';
import List from '../list/List';
import TextField from '../textfield/TextField';
import './Form.css'

const Form = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [equipe, setEquipe] = useState('');

    const aoEnviar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            equipe
        });
        setNome('');
        setCargo('');
        setEquipe('');
        setImagem('');
    };

    return (
        <section className="formulario">
            <form onSubmit={aoEnviar}>
                <h1>Preencha os dados do seu colaborador abaixo.</h1>
                <TextField
                    notnull={true}
                    label="Nome"
                    placeholder="Digite o nome do seu colaborador"
                    valor={nome}
                    onChanges={valor => setNome(valor)} />
                <TextField
                    notnull={true}
                    label="Cargo"
                    placeholder="Digite o cargo do seu colaborador"
                    valor={cargo}
                    onChanges={valor => setCargo(valor)}
                />
                <TextField
                    notnull={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    onChanges={valor => setImagem(valor)} />
                <List
                    notnull={true}
                    label="Equipe"
                    itens={props.times}
                    valor={equipe}
                    onChanges={valor => setEquipe(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;