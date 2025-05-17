const mongoose = require("mongoose");
mongoose
  .connect('mongodb+srv://acsahrojan:scKSBcihcSy4nccB@cluster0.klyospf.mongodb.net/BlogPost'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
