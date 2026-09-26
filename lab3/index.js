var http = require("http");

//TODO - Use Employee Module here
var employees = require("./Employee");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, {'Content-Type': 'application/json'});
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else if (req.url === '/') {
        //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h1>Welcome to Lab Exercise 03</h1>");
    } else if (req.url === '/employee') {
        //TODO - Display all details for employees in JSON format
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(employees));
    } else if (req.url === '/employee/names') {
        //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
        //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        var names = [];

        for (var i = 0; i < employees.length; i++) {
            names[i] = employees[i].firstName + " " + employees[i].lastName;
        }

        for (var i = 0; i < names.length; i++) {
            for (var j = i + 1; j < names.length; j++) {
                if (names[i] > names[j]) {
                    var temp = names[i];
                    names[i] = names[j];
                    names[j] = temp;
                }
            }
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(names));
    } else if (req.url === '/employee/totalsalary') {
        //TODO - Display Sum of all employees salary in given JSON format
        //e.g. { "total_salary" : 100 }
        var totalSalary = 0;

        for (var i = 0; i < employees.length; i++) {
            totalSalary = totalSalary + employees[i].Salary;
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({"total_salary": totalSalary}));
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
