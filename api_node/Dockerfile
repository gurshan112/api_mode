# Imagen oficial de Node.js con soporte vigente
FROM node:22-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el proyecto al contenedor
COPY . .

# Instalamos las dependencias
RUN npm install

# Puerto en el que escucha la API
EXPOSE 3000

# Arrancamos la aplicación con npm start
CMD ["npm", "start"]
