var OSinfo = require('./modules/OSinfo');
var EventEmmiter = require('events').EventEmitter;

var emitter = new EventEmmiter();
emitter.on('beforeCommand', function (instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.');
});
emitter.on('afterCommand', function () {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        emitter.emit('beforeCommand', instruction);
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
        };
        emitter.emit('afterCommand');
    }
});
