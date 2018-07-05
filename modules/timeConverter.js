function toMinute(Uptime) {
    var minute = (Uptime/60).toFixed(0);
    return minute;
};
function toHours(Uptime) {
    var hours = ((Uptime/60)/60).toFixed(0);
    return hours;
};

exports.minute = toMinute;
exports.hours = toHours;
