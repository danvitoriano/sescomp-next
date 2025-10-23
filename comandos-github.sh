#!/bin/bash

echo "🚀 SESCOMP 2026 - Push para GitHub"
echo "======================================"
echo ""

# Verificar se já existe remote
if git remote | grep -q "origin"; then
    echo "⚠️  Remote 'origin' já existe. Removendo..."
    git remote remove origin
fi

# Solicitar username
read -p "Digite seu username do GitHub: " github_user

if [ -z "$github_user" ]; then
    echo "❌ Username não pode ser vazio!"
    exit 1
fi

echo ""
echo "📡 Conectando ao repositório..."
git remote add origin https://github.com/$github_user/sescomp-2026.git

echo ""
echo "🌿 Definindo branch principal como 'main'..."
git branch -M main

echo ""
echo "📤 Enviando código para o GitHub..."
echo ""

# Tentar push normal primeiro
if git push -u origin main 2>/dev/null; then
    echo ""
    echo "✅ Push realizado com sucesso!"
else
    echo "⚠️  Push normal falhou. Isso é normal se o repositório já existe no GitHub."
    read -p "Deseja forçar o push? (s/n): " force_push
    
    if [ "$force_push" = "s" ] || [ "$force_push" = "S" ]; then
        echo "📤 Forçando push..."
        git push -f origin main
        echo "✅ Push forçado realizado!"
    else
        echo "❌ Push cancelado."
        exit 1
    fi
fi

echo ""
echo "✅ Concluído!"
echo ""
echo "🌐 Acesse seu repositório:"
echo "   https://github.com/$github_user/sescomp-2026"
echo ""
echo "🚀 Próximo passo: Deploy na Vercel"
echo "   1. Acesse: https://vercel.com/new"
echo "   2. Conecte com GitHub"
echo "   3. Importe: $github_user/sescomp-2026"
echo "   4. Clique em Deploy"
echo "   5. Aguarde 2 minutos"
echo "   6. Pronto! 🎉"
echo ""

