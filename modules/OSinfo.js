var os = require('os');
var colors = require('colors');
var timeConverter = require('./timeConverter');

function getOSinfo() {
    
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    
    console.log('System: '.grey + type);
    console.log('Release: '.red + release);
    console.log('CPU model: '.blue + cpu);
    console.log('Minute-uptime: ~ '.green + timeConverter.minute(uptime) + ' minutes');
    console.log('Hours-uptime: ~ '.green + timeConverter.hours(uptime) + ' hours');
    console.log('User name: '.yellow + userInfo.username);
    console.log('Home dir: '.gray + userInfo.homedir);
};

exports.print = getOSinfo;
