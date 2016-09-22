FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('default', {content: 'home'});
  }
});

FlowRouter.route('/video', {
  name: 'video',
  action: function() {
    BlazeLayout.render('default', {content: 'video'})
  }  
});

FlowRouter.route('/service', {
  name: 'service',
  action: function() {
    BlazeLayout.render('default', {content: 'service'})
  }  
});

FlowRouter.route('/team', {
  name: 'team',
  action: function() {
    BlazeLayout.render('default', {content: 'team'})
  }  
});

FlowRouter.route('/contact', {
  name: 'contact',
  action: function() {
    BlazeLayout.render('default', {content: 'contact'})
  }  
});

FlowRouter.route('/join', {
  name: 'join',
  action: function() {
    BlazeLayout.render('default', {content: 'join'})
  }  
});

FlowRouter.route('/news', {
  name: 'news',
  action: function() {
    BlazeLayout.render('default', {content: 'news'})
  }  
});