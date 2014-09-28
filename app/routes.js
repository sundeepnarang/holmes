module.exports = function(app,lib) {

	
	// ================== INDEX =======================
	app.get('/', function(req, res) {
		res.sendfile('./public/HTMLS/home.html');
	});
	app.get('/images/*', function(req, res) {
		if (req.url[0]=='/') {req.url=req.url.substring(1)}  
		res.sendfile('./public/'+ req.url);
	});


	app.post('/question',function (req,res) {
		var question = req.query.q;
		var answer = lib.findAns(question); 
		res.send({'answer':answer});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/HTMLS/error.html');
	});



}