FROM node:20-alpine

COPY package*.json ./

RUN npm install

WORKDIR /app

# Kopiera all kod
COPY . .

# Bygg TypeScript-koden
RUN npm run build

EXPOSE 3000 

# Starta applikationen
CMD ["npm", "run", "dev"]
