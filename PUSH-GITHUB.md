# 🚀 Guia Rápido - Push para GitHub

## ✅ Status Atual

- ✔️ **Git inicializado**
- ✔️ **Commit feito**
- ✔️ **Arquivos na raiz** (estrutura limpa)
- ✔️ **Pronto para push!**

---

## 📂 Estrutura Atual (NA RAIZ)

```
sescomp2026/
├── app/              ✅
├── components/       ✅
├── lib/              ✅
├── types/            ✅
├── package.json      ✅
├── README.md         ✅
├── .gitignore        ✅
└── ...               ✅
```

**✅ Perfeito! Tudo na raiz, sem pastas extras!**

---

## 🎯 Próximos Passos (5 minutos)

### 1️⃣ Criar Repositório no GitHub

1. Acesse: **https://github.com/new**
2. Configure:
   ```
   Nome: sescomp-2026
   Descrição: Site oficial da SESCOMP 2026 - UFC Russas
   Público: ✅ SIM
   
   NÃO marque:
   ❌ Add a README file
   ❌ Add .gitignore  
   ❌ Choose a license
   ```
3. Clique: **"Create repository"**

---

### 2️⃣ Enviar para o GitHub

**Opção A - Script Automático (RECOMENDADO):**

```bash
cd /Users/danvitoriano/Documents/sescomp2026
./comandos-github.sh
```

O script vai:
- Pedir seu username do GitHub
- Conectar ao repositório
- Fazer o push automaticamente
- Lidar com erros automaticamente

---

**Opção B - Comandos Manuais:**

```bash
cd /Users/danvitoriano/Documents/sescomp2026

# Conectar (SUBSTITUA danvitoriano pelo SEU usuário!)
git remote add origin https://github.com/danvitoriano/sescomp-2026.git

# Definir branch
git branch -M main

# Enviar
git push -u origin main
```

---

### 3️⃣ Deploy na Vercel (GRATUITO!)

1. **Acesse:** https://vercel.com/signup
2. **Clique:** "Continue with GitHub"
3. **Autorize** a Vercel
4. **Clique:** "Add New Project"
5. **Selecione:** "sescomp-2026"
6. **Clique:** "Deploy" (não mude nada!)
7. **Aguarde:** 2-3 minutos ⏱️
8. **🎉 PRONTO!** Copie a URL!

---

## 🌐 Sua URL Será

```
https://sescomp-2026.vercel.app
```

ou

```
https://sescomp-2026-seu-usuario.vercel.app
```

---

## 🔄 Para Atualizar Depois

Sempre trabalhe neste diretório:
```bash
cd /Users/danvitoriano/Documents/sescomp2026
```

Para publicar mudanças:
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

**A Vercel detecta e publica automaticamente em ~2 minutos!**

---

## ✨ Vantagens

✅ Tudo na raiz (estrutura padrão Next.js)
✅ Sem arquivos antigos (HTML)
✅ Profissional e organizado
✅ Pronto para colaboradores
✅ Deploy automático configurado

---

## 🎬 Comandos Rápidos

```bash
# Ver status
git status

# Ver commits
git log --oneline

# Ver remote
git remote -v

# Remover remote (se precisar refazer)
git remote remove origin
```

---

## 📸 Compartilhe Depois!

```
🎉 Site da SESCOMP 2026 está no ar!

🌐 https://sescomp-2026.vercel.app

💻 Tech Stack:
   • Next.js 14
   • React 18
   • TypeScript
   • Tailwind CSS

#SESCOMP2026 #UFC #Russas #WebDev
```

---

**Bora publicar! 🚀**

