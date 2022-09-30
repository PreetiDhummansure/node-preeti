const { UPLOAD_PATH } = require("../constants");

exports.single = (req, res, key, folder) => {
	const file = req.files[key];
	const fileName = `${new Date().getTime()}.${file.name.split(".").pop()}`;
	const uploadPath = `${process.env.UPLOAD_PATH}/${folder}/${fileName}`;
	//const uploadPath = `${UPLOAD_PATH}/${folder}/${fileName}`;

	file.mv(uploadPath, function (err) {
		if (err) return res.status(500).send(err);
	});

	req.body[key] = fileName;
};

 const obj = {
 	id: 5321,
 	name: "preet",
 	email: "preet@test.com",
 };

 const key = "name";

console.log(obj[key]);