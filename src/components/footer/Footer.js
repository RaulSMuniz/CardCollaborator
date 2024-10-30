import './Footer.css'

const Footer = () => {
    return (
        <section className="rodape">
            <div className="icons">
                <img src='./imagens/fb.png' alt='Icon' />
                <img src='./imagens/tw.png' alt='Icon' />
                <img src='./imagens/ig.png' alt='Icon' />
            </div>
            <div className="logo">
                <img src='./imagens/logo.png' alt='Logo' />
            </div>
            <div className="copyright">
                <h3>Desenvolvido por Alura.</h3>
            </div>
        </section>
    )
}

export default Footer;