require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

require('./db/config');
const User = require('./db/user');

PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, callback) {
			callback(null, "public");
		},
		filename: function (req, file, callback) {
			callback(null, file.fieldname + "-" + Date.now() + ".jpg");
		}
	})
}).single('file');

app.post('/login', async (req, res) => {
	let user = await User.findOne({ 'username': req.body.username, 'password': req.body.password }).select('-password');
	if (user) {
		res.send({ 'status': true, 'user': user });
	} else {
		res.send({ 'status': false, 'message': "Invalid username or password." });
	}
});

app.post('/createBanner', upload, async (req, res) => {
	res.send({ data: req.body, fileFromServer: req.file });
	// let user = await User.findOne({ 'username': req.body.username, 'password': req.body.password }).select('-password');
	// if (user) {
	// 	res.send({ 'status': true, 'user': user });
	// } else {
	// 	res.send({ 'status': false, 'message': "Invalid username or password." });
	// }
});

// app.post('/activateBanner', async (req, res) => {
// 	let user = await User.findOne({ 'username': req.body.username, 'password': req.body.password }).select('-password');
// 	if (user) {
// 		res.send({ 'status': true, 'user': user });
// 	} else {
// 		res.send({ 'status': false, 'message': "Invalid username or password." });
// 	}
// });

app.listen(PORT);