import './Contact.css'

function Contact() {
    return (
        <section className="contact-section" id="contacto">
            <div className="contact-shell">
                <h2 className="contact-title">Contacto</h2>
                <form
                    className="contact-form"
                    action="https://formsubmit.co/michelle.dterlizzi@gmail.com"
                    method="POST"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portfolio" />

                    <label>
                        Nombre
                        <input type="text" name="name" placeholder="Tu nombre" required />
                    </label>

                    <label>
                        Email
                        <input type="email" name="email" placeholder="tu@email.com" required />
                    </label>

                    <label>
                        Mensaje
                        <textarea name="message" rows={6} placeholder="Escribe tu mensaje..." required />
                    </label>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Contact