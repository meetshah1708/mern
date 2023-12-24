const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gofoodmern", {                     //do Connection in compass

    useCreateIndex: true,
    useNewParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful")
}).catch((e) => {
    console.log("Not sucesful");
});