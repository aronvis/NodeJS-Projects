var url = require('url');
var fileSystem = require('fs')

function renderHTML(path, response) 
{
	fileSystem.readFile(path, null, function(error, data){
		if (error) {
			response.writeHead(404);
			response.write("File not found!");
		}
		else
		{
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response){
		response.writeHead(200, {'Content-Type': 'text/html'});
		var path = url.parse(request.url).pathname;
		switch (path)
		{
			case '/':
				renderHTML('./index.html', response);
				break;
			case '/login':
				renderHTML('./login.html', response);
				break;
			default:
				renderHTML('', response);
				break;
		}

	}

};