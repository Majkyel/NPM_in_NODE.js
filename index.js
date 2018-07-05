var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        
        var instruction = input.trim();
        
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quiting app!\n');
                process.exit();
                break;
            case '/version':
                console.log(process.versions);
                break;
            case '/language':
                console.log(process.env);
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stdout.write('Wrong instruction!\n');
        }
    }
});
