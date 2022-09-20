const PORT = process.env.PORT || 3000;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router);
server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);

//1. npm init -y (code)
//2. npm i json-server (code)
//3. create server.js (file)
//4. copy the code to server.js (today'e leacutre or json-server documentation)
//5. node server.js 



//When you divide use you will fine
// 1. Base url 
//2 . End point 
// 3. Query params = 