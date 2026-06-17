import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function Contact() {
  const recaptchaRef = useRef(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail || !trimmedMessage) {
      toast.warning('Preencha todos os campos.');
      return;
    }

    if (!recaptchaSiteKey) {
      toast.error('Chave pública do reCAPTCHA não configurada.');
      return;
    }

    const recaptchaToken = recaptchaRef.current?.getValue();

    if (!recaptchaToken) {
      toast.warning('Confirme o reCAPTCHA antes de enviar.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          message: trimmedMessage,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar mensagem.');
      }

      toast.success('Mensagem enviada com sucesso!');
      setEmail('');
      setMessage('');
      recaptchaRef.current?.reset();
    } catch (error) {
      recaptchaRef.current?.reset();
      toast.error(error.message || 'Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="section contact">
      <div className="container contactBox">
        <div className="sectionHeader">
          <span className="eyebrow">Envie sua dúvida</span>
          <h2>Entre em contato</h2>
          <p>
            Envie sua dúvida, solicite um orçamento ou fale com nossa equipe sobre soluções financeiras para você ou sua empresa.
          </p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={loading}
          />

          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            placeholder="Motivo do contato. Ex: Gostaria de conhecer melhor os planos da FinUp."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            disabled={loading}
          />

          {recaptchaSiteKey ? (
            <div className="recaptchaBox">
              <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} />
            </div>
          ) : (
            <p className="formWarning">Configure VITE_RECAPTCHA_SITE_KEY no Netlify.</p>
          )}

          <button className="btn btnPrimary" type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
