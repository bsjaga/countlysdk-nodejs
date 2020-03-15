//since we need to test crashing the app
/*global app*/
var Countly = require("../lib/countly.js");

Countly.init({
    app_key: "YOUR_APP_KEY",
    url: "https://try.count.ly", //your server goes here
    debug: true
});

//report app start trace
Countly.report_app_start();

//example express middleware
function expressMiddleware(req, res, next) {
    var trace = {
        type: "network",
        name: req.baseUrl + req.path,
        stz: Date.now(),
    };
    
    var processed = false;
    
    function processRequest() {
        if (!processed) {
            processed = true;
            trace.etz = Date.now();
            trace.apm_metrics = {
                response_time: trace.etz - trace.stz,
                response_code: res.statusCode
            };
            Countly.report_trace(trace);
        }
    }

    res.on('finish', processRequest);

    res.on('close', processRequest);

    next();
}

app.use(expressMiddleware);