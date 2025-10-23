# 🚀 Guia de Publicação - GitHub + Vercel

## ✅ Passo 1: Git Inicializado
✔️ Já feito! O repositório Git foi inicializado e o commit inicial foi criado.

---

## 📦 Passo 2: Criar Repositório no GitHub

### 1. Acesse o GitHub
Vá para: https://github.com/new

### 2. Configure o repositório:
- **Repository name:** `sescomp-2026`
- **Description:** "Site oficial da SESCOMP 2026 - UFC Russas | Next.js + React + TypeScript"
- **Visibilidade:** Public (público) ✅
- **NÃO marque:** 
  - ❌ Add a README file
  - ❌ Add .gitignore
  - ❌ Choose a license
  
  (Já temos esses arquivos!)

### 3. Clique em: **"Create repository"**

---

## 🔗 Passo 3: Conectar e Enviar para o GitHub

Depois de criar o repositório, o GitHub vai mostrar instruções. Use estes comandos:

### No terminal (dentro da pasta sescomp-next):

```bash
# 1. Conectar ao repositório remoto
git remote add origin https://github.com/SEU_USUARIO/sescomp-2026.git

# 2. Definir branch principal
git branch -M main

# 3. Enviar código para o GitHub
git push -u origin main
```

**⚠️ IMPORTANTE:** Substitua `SEU_USUARIO` pelo seu username do GitHub!

### Exemplo:
Se seu usuário é `danvitoriano`:
```bash
git remote add origin https://github.com/danvitoriano/sescomp-2026.git
```

---

## 🌐 Passo 4: Deploy na Vercel (Hospedagem GRATUITA!)

### Por que Vercel?
- ✅ **Gratuito** para projetos pessoais
- ✅ **Oficial** do Next.js (mesma empresa)
- ✅ **Deploy automático** (cada push = nova versão)
- ✅ **HTTPS** automático
- ✅ **CDN global** (super rápido)
- ✅ **Domínio grátis** (.vercel.app)

### Passos:

#### 1️⃣ Crie conta na Vercel
- Acesse: https://vercel.com/signup
- Clique em **"Continue with GitHub"**
- Autorize a Vercel a acessar seus repositórios

#### 2️⃣ Import Project
- Clique em **"Add New Project"**
- Selecione o repositório **"sescomp-2026"**
- Clique em **"Import"**

#### 3️⃣ Configure o projeto
A Vercel detecta automaticamente que é Next.js!

**Configurações (pode deixar padrão):**
- **Framework Preset:** Next.js ✅ (auto-detectado)
- **Root Directory:** `./`
- **Build Command:** `npm run build` (auto)
- **Output Directory:** `.next` (auto)
- **Install Command:** `npm install` (auto)

#### 4️⃣ Deploy!
- Clique em **"Deploy"**
- Aguarde 2-3 minutos ⏱️
- 🎉 **Pronto!** Seu site está no ar!

---

## 🌍 Acessando o Site

Após o deploy, você terá uma URL tipo:
```
https://sescomp-2026.vercel.app
```

ou

```
https://sescomp-2026-danvitoriano.vercel.app
```

### Compartilhe com todo mundo! 📣

---

## 🔄 Atualizações Futuras

### Para atualizar o site depois:

```bash
# 1. Fazer suas alterações nos arquivos

# 2. Adicionar ao Git
git add .

# 3. Commit com mensagem
git commit -m "Descrição das mudanças"

# 4. Enviar para o GitHub
git push
```

**✨ A Vercel vai automaticamente:**
- Detectar o push
- Fazer novo build
- Publicar a nova versão
- **Em ~2 minutos!**

---

## 🎨 Domínio Personalizado (Opcional)

### Você pode usar seu próprio domínio!

Se você tiver um domínio (ex: `sescomp.com.br`):

1. No painel da Vercel, vá em **"Settings"** → **"Domains"**
2. Adicione seu domínio
3. Configure os DNS conforme instruções
4. Pronto! Seu site em domínio próprio

---

## 📊 Dashboard da Vercel

A Vercel oferece:
- 📈 **Analytics** - Quantas visitas seu site teve
- 🚀 **Performance** - Velocidade de carregamento
- 🐛 **Logs** - Debug em tempo real
- 🌍 **Preview URLs** - Testar antes de publicar

---

## 🔐 Variáveis de Ambiente (Para o futuro)

Quando você adicionar backend/API:

1. Na Vercel: **Settings** → **Environment Variables**
2. Adicione suas variáveis:
   ```
   DATABASE_URL=...
   API_KEY=...
   ```
3. Redeploy automático com novas variáveis

---

## 💡 Dicas Pro

### 1. Branch Protection
- Crie branch `development` para testes
- Branch `main` só para produção
- Vercel pode gerar preview para cada branch!

### 2. Preview Deployments
- Cada pull request = preview URL única
- Teste antes de mergear para main

### 3. Custom Build Command
Se precisar:
```bash
# Vercel → Settings → Build & Development Settings
Build Command: npm run build && npm run custom-script
```

---

## 🆘 Troubleshooting

### Erro no Deploy?

**1. Build falhou:**
```bash
# Teste localmente primeiro:
cd sescomp-next
npm run build
```

**2. Erro de módulos:**
```bash
# Limpe e reinstale:
rm -rf node_modules .next
npm install
npm run build
```

**3. Erro de TypeScript:**
- Verifique erros no VSCode
- Corrija antes de fazer push

### Deploy muito lento?
- Primeira vez demora mais (instalando tudo)
- Próximos deploys: ~1-2 minutos

---

## 📸 Seu Site no Ar!

Depois do deploy, você terá:

✅ **URL pública** para compartilhar
✅ **HTTPS** automático (seguro)
✅ **Performance global** (CDN)
✅ **Deploy contínuo** (auto-deploy)
✅ **Analytics** (estatísticas)

---

## 🎯 Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado (`git push`)
- [ ] Conta criada na Vercel
- [ ] Projeto importado e deployado
- [ ] Site acessível via URL
- [ ] Compartilhado com a galera! 🎉

---

## 📚 Links Úteis

- **Seu GitHub:** https://github.com/SEU_USUARIO/sescomp-2026
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Docs Vercel:** https://vercel.com/docs
- **Docs Next.js:** https://nextjs.org/docs

---

**🎉 Parabéns! Seu site estará no ar em poucos minutos!**

Site profissional, gratuito e super rápido! 🚀

