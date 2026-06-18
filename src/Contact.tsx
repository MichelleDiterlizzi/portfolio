import { useTranslation } from 'react-i18next'
import './Contact.css'

function Contact() {
    const { t } = useTranslation()
    return (
        <section className="contact-section" id="contacto">
            <div className="contact-shell">
                <h2 className="contact-title">{t('title.contact')}</h2>
                <form
                    className="contact-form"
                    action="https://formsubmit.co/michelle.dterlizzi@gmail.com"
                    method="POST"
                >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="Nuevo mensaje desde tu portfolio" />

                    <label>
                        {t('contact.name')}
                        <input type="text" name="name" placeholder={t('contact.lblname')} required />
                    </label>

                    <label>
                        {t('contact.email')}
                        <input type="email" name="email" placeholder={t('contact.lblemail')} required />
                    </label>

                    <label>
                        {t('contact.message')}
                        <textarea name="message" rows={6} placeholder={t('contact.lblmessage')} required />
                    </label>

                    <button type="submit">{t('contact.sendButton')}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact