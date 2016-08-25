if (Meteor.isClient) {
  setLanguage = function () {
    var language = "zh-CN"
    // var i18nLang = window.navigator.userLanguage || window.navigator.language;
    i18n.setLanguage(language);
    // t9nLang = i18nLang.replace('-', '_').toLowerCase();
    T9n.setLanguage(language);
  }

  Meteor.startup(function() {
    setLanguage();
  })
}