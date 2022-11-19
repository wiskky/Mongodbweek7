const express = require('express');
const { json } = require('express');
const connect = require('./config/database');
const userRoute = require('./router/userRoutes')

connect()

const app = express();
app.use(json());

app.use("/todo", userRoute);


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Zuri Training on Mongo is sweet");
});

app.listen(PORT, () => console.log(`Serving on port ${PORT}`))
//app.listen(3000, () => console.log("Server is connected"))