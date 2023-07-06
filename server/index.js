const express =require("express")
const app = express()
const cors = require('cors');
const PORT = 8000


app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const router = require("./routes/indexRouter")
app.use("/",router)

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
})