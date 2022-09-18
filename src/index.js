const express = require('express')

//FAKE DATABASE
let hours = {
    currentDateTime:"2018-08-12T14:40Z"
};

//CRIAR O APP
const app = express();
const cors = require('cors')


//APLICAR MIDDLEWARES
app.use(express.json());
app.use(cors());


//GET API
app.get('/list', (req, res) => {
    const allHours = hours;
    return res.status(200).json(allHours)

});

//MANDAR O SERVIDOR RODAR
app.listen(8080, () => console.log("Server codex-test is running"))