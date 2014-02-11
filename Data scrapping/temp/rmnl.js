var fs = require('fs');
data = fs.readFileSync('lyrics');
log = console.log;

log(data.toString().replace(/[\n|,]/g, ' '));
