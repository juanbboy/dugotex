let express = require("express");
const app = express();
bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", ( req, res)=> {
    const datos={
        msg: 'hola mundo',
        status: false
    }
    res.send ( datos)
})

const port = process.env.PORT || 4001;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use((req, res, next) => {
    next(createError(404));
  });