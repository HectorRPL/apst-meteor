DataBase

```
  Las siguientes variables para conectarse a la base remota se implementan en la terminal ubicada en app-web/api

  Windows
  SET MONGO_URL=mongodb://apst01:0000@ds213209.mlab.com:13209/apst-dev

  Linux
  export MONGO_URL=mongodb://apst01:0000@ds213209.mlab.com:13209/apst-dev
```

Cuando se hace un git clone

lo primero que hay que hacer es el comando a nivel /apst-meteor
```
npm install
```

Para correr los servers:
```
meteor run --settings private/settings.json
npm start
```