const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products_models.js");
const productRoute = require("./routes/products_routes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/products", productRoute);

//app.listen(4850, () => {
//   console.log("server lstion 4850 port");
//})

app.get("/", (req, res) => {
  res.send("hello from Node api js server");
});

/*
app.get('/api/products',async(req,res)=>{
  //console.log(req.body);
  // res.send(req.body);
   //res.send("Data Recived");
   
   try {
     const products = await Product.find({});
     res.status(200).json(products);
   } catch (error) {
     res.status(500).json({message:error.message});
   }
 });
 */ // commnet beacuse we create routes and controllers
/*
 app.get('/api/products/:id',async(req,res)=>{
  //console.log(req.body);
  // res.send(req.body);
   //res.send("Data Recived");
   
   try {
    const { id }= req.params;
     const product = await Product.findById(id);
     res.status(200).json(product);
   } catch (error) {
     res.status(500).json({message:error.message});
   }
 });
 */ // commnet beacuse we create routes and controllers

/*
app.post('/api/products',async(req,res)=>{
 //console.log(req.body);
 // res.send(req.body);
  //res.send("Data Recived");
  
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
});

*/ //commnet beacuse we create routes and controllers

/*
// update
app.put('/api/products/:id',async(req,res)=>{
  //console.log(req.body);
  // res.send(req.body);
   //res.send("Data Recived");
   
   try {
    const {id}=req.params;
     const product = await Product.findByIdAndUpdate(id, req.body);
     if(!product){
      return res.status(404).json({message:"Product not Found"});
     }
     const Updateproduct = await Product.findById(id);
     res.status(200).json(Updateproduct);
     //res.status(200).json(product);// if you only update and not dispaly updated value 
   } catch (error) {
     res.status(500).json({message:error.message});
   }
 });
 */ // commnet beacuse we create routes and controllers

/*
// delete 
app.delete('/api/products/:id',async(req,res)=>{
  
  try {
    const {id}=req.params;
     const product = await Product.findByIdAndDelete(id);
     if(!product){
      return res.status(404).json({message:"Product not Found"});
     }
     //const Updateproduct = await Product.findById(id);
     res.status(200).json({message:"Product successfully deleted."});
     //res.status(200).json(product);// if you only update and not dispaly updated value 
   } catch (error) {
     res.status(500).json({message:error.message});
   }
});
*/ //  commnet beacuse we create routes and controllers

mongoose
  .connect(
    "mongodb+srv://mopalid960:LDsMYdDIoxrnm5iP@cluster0.e9nyqtl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(4850, () => {
      console.log("server lstion 4850 port");
    });
  })
  .catch(() => console.log("Connected to database Faild!"));
