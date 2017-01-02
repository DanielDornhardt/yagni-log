// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
//
// NOTE: Always wraps the given arguments in an array for better content formatting in the
// different browsers' consoles! Don't be surprised!
log = function() {
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);

    if(this.console){
        if (Meteor && Meteor.isServer) {
            console.log.apply(this, Array.prototype.slice.call(arguments));
        } else {
            console.log( Array.prototype.slice.call(arguments) );
        }
    }
};

// do a deep-log, if we are on the server and EJSON is available
// otherwise do a standard log.
// NOTE: on the client we do NOT need a deep-function, because most browser-consoles
// provide this behaviour by default
logDeep = function() {
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);

    if(this.console){
        if (Meteor && Meteor.isServer && EJSON) {
            // stringify each argument
            for (i = 0; i < arguments.length; i++) {
                arguments[i] = EJSON.stringify(arguments[i], { indent: 2 })
            }
            console.log.apply(this, Array.prototype.slice.call(arguments));
        } else {
            log(arguments)  // fallback
        }
    }
};

if (Meteor.isClient) {
    Meteor.startup(function(){
        Template.registerHelper('log', function(){
            log(arguments);
        });
    });
}