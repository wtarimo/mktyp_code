if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('counterM', 0);
  Session.setDefault('counterF', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    counterM: function () {
      return Session.get('counterM');
    },
    counterF: function () {
      return Session.get('counterF');
    }
  });

  Template.hello.events({
    'click button#enterM': function () {
      // increment the counter when button is clicked
      Session.set('counterM', Session.get('counterM') + 1);
      Session.set('counter', Session.get('counter') + 1);
    },
    'click button#leaveM': function () {
      // increment the counter when button is clicked
      Session.set('counterM', Session.get('counterM') - 1);
      Session.set('counter', Session.get('counter') - 1);
    },
    'click button#enterF': function () {
      // increment the counter when button is clicked
      Session.set('counterF', Session.get('counterF') + 1);
      Session.set('counter', Session.get('counter') + 1);
    },
    'click button#leaveF': function () {
      // increment the counter when button is clicked
      Session.set('counterF', Session.get('counterF') - 1);
      Session.set('counter', Session.get('counter') - 1);
    },

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
