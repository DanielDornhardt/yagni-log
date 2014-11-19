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

if (Meteor.isClient) {
    Meteor.startup(function(){
        Template.registerHelper('log', function(){
            log(arguments);
        });
    });
}