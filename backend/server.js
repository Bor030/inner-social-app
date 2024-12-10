const express = require('express');
const mongoose = require('mongoose');
const { PORT, DB } = require('./config');

const app = express();
mongoose.connect(DB).then(() => {
    
    console.log('DB connected')
}).catch(err => {
    console.log(err)
})
app.use(express.json())

app.get('/', (req, res) => {

    res.send('hello world test')
}
)

app.listen(PORT, () => { console.log('server ok')})