var http = require('http');
var fileSystem = require('fs');

// Function called by the server
function onRequest(request, response) 
{
	// Tells the browser to render the data as HTML
	response.writeHead(200, {'Content-Type': 'text/html'});
	fileSystem.readFile('./index.html', null, function(error, data){
		if (error)
		{
			response.writeHead(404);
			repsonse.write('File not found!');
		} 
		else 
		{
			// Contains all info inside the html wi
			response.write(data);
		}
		response.end();

	})
}

http.createServer(onRequest).listen(8000);

