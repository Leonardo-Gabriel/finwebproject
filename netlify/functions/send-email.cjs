const nodemailer = require('nodemailer');

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { success: false, message: 'Chave secreta do reCAPTCHA não configurada.' };
  }

  const params = new URLSearchParams();
  params.append('secret', secret);
  params.append('response', token);

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  const data = await response.json();

  if (!data.success) {
    return { success: false, message: 'Falha na validação do reCAPTCHA.' };
  }

  return { success: true };
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { message: 'Método não permitido.' });
  }

  try {
    const { email, message, recaptchaToken } = JSON.parse(event.body || '{}');
    const cleanEmail = String(email || '').trim();
    const cleanMessage = String(message || '').trim();

    if (!cleanEmail || !cleanMessage) {
      return jsonResponse(400, { message: 'Preencha todos os campos.' });
    }

    if (!isValidEmail(cleanEmail)) {
      return jsonResponse(400, { message: 'Informe um e-mail válido.' });
    }

    if (!recaptchaToken) {
      return jsonResponse(400, { message: 'Confirme o reCAPTCHA antes de enviar.' });
    }

    const requiredEnv = [
      'SMTP_HOST',
      'SMTP_PORT',
      'SMTP_USER',
      'SMTP_PASS',
      'EMAIL_TO',
      'RECAPTCHA_SECRET_KEY',
    ];
    const missingEnv = requiredEnv.filter((key) => !process.env[key]);

    if (missingEnv.length > 0) {
      return jsonResponse(500, {
        message: 'Variáveis de ambiente ausentes no Netlify.',
        missing: missingEnv,
      });
    }

    const recaptchaResult = await verifyRecaptcha(recaptchaToken);

    if (!recaptchaResult.success) {
      return jsonResponse(403, { message: recaptchaResult.message });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"FinUp Landing Page" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: cleanEmail,
      subject: 'Novo contato recebido pela landing page FinUp',
      text: `Novo contato recebido\n\nE-mail: ${cleanEmail}\n\nMensagem:\n${cleanMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2a44;">
          <h2>Novo contato recebido</h2>
          <p><strong>E-mail:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${escapeHtml(cleanMessage).replaceAll('\n', '<br>')}</p>
        </div>
      `,
    });

    return jsonResponse(200, { message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    return jsonResponse(500, {
      message: 'Erro ao enviar e-mail. Verifique as variáveis de ambiente e tente novamente.',
      error: error.message,
    });
  }
};
