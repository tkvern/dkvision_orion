FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('default', {content: 'home'});
  }
});