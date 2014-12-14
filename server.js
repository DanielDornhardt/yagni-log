Meteor.methods({
  log: function() {
    var result = false;
    if(process.env.LOG == "true") {
      result = true;
    }
    return result;
  }
});