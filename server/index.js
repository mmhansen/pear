import express from 'express';
import path from 'path';

let app = express();

app.get("/*", (req, res)=>{
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(3000, () => console.log("running on localhost:3000"))
