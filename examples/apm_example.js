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

/**
 *  example express middleware
 *  @param {Object} req - request object
 *  @param {Object} res - response object
 *  @param {Function} next - next middleware call
 */
function expressMiddleware(req, res, next) {
    var trace = {
        type: "network",
        name: req.baseUrl + req.path,
        stz: Date.now(),
    };

    var processed = false;

    /**
     *  Prepare request data
     */
    function processRequest() {
        if (!processed) {
            processed = true;
            trace.etz = Date.now();
            trace.apm_metrics = {
                response_time: trace.etz - trace.stz,
                response_code: res.statusCode,
                response_payload_size: res.getHeader('Content-Length') || res._contentLength,
                request_payload_size: (req.socket && req.socket.bytesRead) ? req.socket.bytesRead : req.getHeader('Content-Length')
            };
            Countly.report_trace(trace);
        }
    }

    res.on('finish', processRequest);

    res.on('close', processRequest);

    next();
}

app.use(expressMiddleware);