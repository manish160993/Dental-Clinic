const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');
const path = require('path');

const app = express();

const nexmo = new Nexmo({
	apiKey: '8e2faad0',
	apiSecret: '0D6hKg1tFyHK5Rrg'
},{debug: true
});
// view engine setup

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname+ '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));

const port = 8080;
const server = app.listen(port, () => console.log('Server started on port '+port));


app.get('/services',(req,res)=>{
	res.render('services');
});

app.get('/home',(req,res)=>{
	res.render('index');
});
app.get('/',(req,res)=>{
	res.render('index');
});
app.get('/about',(req,res)=>{
	res.render('about');
});
app.get('/appointment',(req,res)=>{
	res.render('appointment');
});
app.post('/services',(req,res)=>{
	res.render('services');
});

app.post('/home',(req,res)=>{
	res.render('index');
});

app.post('/about',(req,res)=>{
	res.render('about');
});
app.post('/appointment',(req,res)=>{
	res.render('appointment');
});

/*app.post('/sendMessage',(req,res)=>{
	console.log(req.body);
	const number = req.body.number;
	const test = req.body.test;
	nexmo.message.sendSMS(
	'12014643826', number, test, {type : ' unicode' },
	(err,responseData)=> {
		if(err){
			console.log(err);
		} else {
			console.dir(responseData);
		}
	});
});
*/
app.post('/',(req,res) => {
	//res.send(req.body);
	//console.log(req.body);
	const number=req.body.number;
	const name=req.body.name;
	
	nexmo.message.sendSms(
	'12014643826',number,name,{type: 'unicode'},
	(err,responseData)=> {
		if(err){
			console.log(err);
		} else {
			console.dir(responseData);
		}
	});
});