import "../../../styles/style.css";

function Contact() {
  return (
    <div id="contact">
      <h3>Ainda tem dúvidas? Entre em contato</h3>
      <form action="">
        <input type="text" placeholder="Nome completo" required />
        <input type="email" placeholder="E-mail" required />
        <textarea
          placeholder="Escreva aqui.."
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
