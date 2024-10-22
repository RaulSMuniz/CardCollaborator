import TextField from '../textfield/TextField';
import './Form.css'

const Form = () => {
    return (
        <section className="formulario">
            <form>
                <h1>Preencha os dados do seu colaborador abaixo.</h1>
                <TextField label="Nome" placeholder="Digite o nome do seu colaborador."/>
                <TextField label="Cargo" placeholder="Digite o cargo do seu colaborador."/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem."/>
            </form>
        </section>
    )
};

export default Form;