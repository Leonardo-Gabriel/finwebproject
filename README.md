# FinUp Landing Page

Landing page em React + Vite com tema de finanças, responsiva, componentes separados, seção de preços, contato, footer, Toast e envio de e-mail por Netlify Functions com validação de reCAPTCHA.

## Como rodar localmente

```bash
npm install
npm run dev
```

Para testar a função localmente, use o Netlify CLI:

```bash
npm install -g netlify-cli
cp .env.example .env
netlify dev
```

## Variáveis de ambiente necessárias no Netlify

Cadastre estas variáveis em **Site configuration > Environment variables**:

```env
VITE_RECAPTCHA_SITE_KEY=sua_chave_publica_do_recaptcha
RECAPTCHA_SECRET_KEY=sua_chave_secreta_do_recaptcha
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seuemail@gmail.com
SMTP_PASS=sua_senha_de_app_do_gmail
EMAIL_TO=email_que_vai_receber@gmail.com
```

Depois de cadastrar ou alterar variáveis, faça um novo deploy.

## Configuração de build no Netlify

```txt
Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions
```

O arquivo `netlify.toml` já contém essa configuração.

## O que subir para o GitHub

Suba os arquivos do projeto, mas não suba `node_modules`, `dist`, `.env` ou `.netlify`. O `.gitignore` já está configurado para isso.

## Observação sobre Gmail

Para usar Gmail no envio SMTP, o `SMTP_PASS` precisa ser uma senha de app da Conta Google, não a senha normal do e-mail.
