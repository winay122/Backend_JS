import dotenv from "dotenv"
import connectDB from "./db/db.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT ${process.env.PORT}`)
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!! ",err);
})