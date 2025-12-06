# 1. Define o sistema operacional base (Node.js leve)
FROM node:18-alpine

# 2. Cria a pasta onde o app vai ficar dentro do container
WORKDIR /app

# 3. Copia os arquivos de configuração primeiro (para aproveitar o cache)
COPY package*.json ./

# 4. Instala as dependências do projeto
RUN npm install

# 5. Copia todo o restante do seu código para dentro do container
COPY . .

# 6. Avisa qual porta o container vai usar
EXPOSE 3000

# 7. O comando que inicia a aplicação
CMD ["node", "server.js"]