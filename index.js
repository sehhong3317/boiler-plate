const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./models/User');
const bodyParser = require('body-parser');
const config = require('./config/key');

const app = express();
const port = 3000;

mongoose.connect(config.mongoURI, {
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));


//application/x-www-form-urlencoded: 이렇게 된 데이터를 분석해서 가져올 수 있게 하는 것.
app.use(bodyParser.urlencoded({extended: true}));
//application/json타입으로 된 것을 분석해서 가져올 수 있게 하는 것.
app.use(bodyParser.json());



app.get('/', (req, res) => res.send('Hello World 하이루!'));

app.post('/register', (req, res) => {
	//회원가입 할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 디비에 넣어준다.
	//req.body => { id: "sehhong", password: "123" }
	const user = new User(req.body);

	user.save((err, userInfo) => {
		if (err) return res.json({ success: false, err} );
		return res.status(200).json({ success: true })
	});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
