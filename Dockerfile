# Étape 1 : construire l'application Angular
FROM node:18-alpine as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

RUN NODE_OPTIONS=--openssl-legacy-provider npm run build --prod

# Étape 2 : servir les fichiers statiques avec Nginx
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist/heart-risk-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
