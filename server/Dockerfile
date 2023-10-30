FROM node

WORKDIR /app
COPY package.json /app
RUN npm install --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]