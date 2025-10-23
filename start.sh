#!/bin/bash

echo "🚀 Iniciando SESCOMP 2026..."
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo "Por favor, instale o Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) encontrado"
echo ""

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo ""
fi

echo "🎬 Iniciando servidor de desenvolvimento..."
echo "📍 Acesse: http://localhost:3000"
echo ""
echo "⚠️  Pressione Ctrl+C para parar o servidor"
echo ""

npm run dev

