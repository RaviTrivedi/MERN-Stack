const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

// app.set('view engine', 'ejs'); //Only use set (no useMethod)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(express.static("public"));

// Connection to MongooseJS
mongoose.connect("mongodb://localhost:27017/alluserDB", { useNewUrlParser: true }, { useUnifiedTopology: true });

// Schema of Database
const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	birthDate: String,
	bioDate: String
});

// Collection or Model name
const User = mongoose.model("User", userSchema);


app.get("/data", function (req, res) {
	// res.send(items);

	User.find({}, function (err, foundData) {
		// console.log(foundData);
		res.send(foundData);
	});

});

app.get("/edit/:id", function (req, res) {
	// res.send(items);
	console.log(req.params.id);

	const requestedData = req.params.id;

	// res.send("I hope You Got The Data")

	User.findOne({ _id: requestedData }, function (err, foundData) {
		// console.log(foundData);
		res.send(foundData);
	});

});

app.post("/data", function (req, res) {
	// console.log(req.body);
	const newUser = new User({
		firstName: req.body.usrFirstName,
		lastName: req.body.usrLastName,
		email: req.body.usrEmail,
		birthDate: req.body.usrBirthData,
		bioDate: req.body.usrInfo
	});
	newUser.save();
	res.send("Successfully Received Data...");
});

app.post("/delete", function (req, res) {
	console.log(req.body);
	const foundData = req.body.name;
	// console.log(foundData);
	User.findByIdAndDelete({ _id: foundData }, function (err) {
		if (!err) {
			console.log("Successfully Deleted Item");
		} else {
			console.log(err);
		}
	});
	res.send("Successfully Deleted Data...");
});

app.put("/edit/:id", function (req, res) {
	console.log(req.body);
	// const gotEditId = req.body.editDataName;
	// res.send("Successfully Received Data");
	const gotEditId = req.body._id;
	const updataUser = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		birthDate: req.body.birthDate,
		bioDate: req.body.bioDate
	};
	User.findOneAndUpdate({ _id: gotEditId }, updataUser, function (err) {
		if (!err) {
			console.log("Successfully Updated Data");
		} else {
			console.log(err);
		}
	});
});

app.listen(4000, function () {
	console.log("Server statred on port 4000");
});


