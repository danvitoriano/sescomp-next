# 🚀 Guia de Instalação - SESCOMP 2026

## Passos para Iniciar o Projeto

### 1️⃣ Navegue até a pasta do projeto

```bash
cd /Users/danvitoriano/Documents/sescomp2026/sescomp-next
```

### 2️⃣ Instale as dependências

```bash
npm install
```

Este comando irá instalar:
- next@^14.2.0
- react@^18.3.0
- react-dom@^18.3.0
- typescript@^5.0.0
- tailwindcss@^3.4.0
- E outras dependências necessárias

### 3️⃣ Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O site estará disponível em: **http://localhost:3000**

### 4️⃣ Build para produção (opcional)

```bash
npm run build
npm start
```

## ⚠️ Possíveis Problemas

### Node.js não instalado
Se você receber erro sobre Node.js, instale a versão mais recente:
- https://nodejs.org/ (versão LTS recomendada)

### Porta 3000 em uso
Se a porta 3000 estiver ocupada, o Next.js automaticamente tentará usar a próxima disponível (3001, 3002, etc).

### Erro de permissões
No macOS, você pode precisar usar:
```bash
sudo npm install
```

## 📦 Estrutura Criada

```
✅ Configuração Next.js 14 com App Router
✅ TypeScript configurado
✅ Tailwind CSS configurado
✅ 10+ componentes React criados
✅ Sistema de tipos TypeScript
✅ Dados estruturados e separados
✅ README completo
✅ .gitignore configurado
```

## 🎯 Próximos Passos Após Instalação

1. Acesse http://localhost:3000
2. Teste a navegação entre seções
3. Veja o contador regressivo funcionando
4. Interaja com os cards de palestrantes
5. Teste a responsividade (redimensione o navegador)

## 💡 Dicas

- Use `Ctrl + C` para parar o servidor
- Alterações no código são refletidas automaticamente (hot reload)
- Erros aparecem no terminal e no navegador
- Use `npm run lint` para verificar problemas no código

---

Desenvolvido com ❤️ para SESCOMP 2026

