# Utilise l'image officielle Node.js
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances (Node, Express, Prisma, etc.)
RUN npm install

# Copier tout le projet dans le conteneur
COPY . .

# Exposer le port 5000
EXPOSE 5000

# Démarrer l'application
CMD ["npm", "run", "start"]
