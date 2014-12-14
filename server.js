Meteor.methods({
  debug: function() {
    var result = false;
    if(process.env.DEBUG == "true") {
      result = true;
    }
    return result;
  }
});