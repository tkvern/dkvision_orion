// Orion options

Options.set('forbidClientAccountCreation', true);

Options.set('defaultRoles', ['user']);

// Options.set('showExportTab', true);


// Orion Config
orion.config.add('SITE_TITLE', 'site', { public: true });
orion.config.add('SITE_KEY', 'site', { public: true });
orion.config.add('SITE_DESCRIPTION', 'site', { public: true });

orion.config.add('APP_NAME', 'app', { public: true });
orion.config.add('APP_LANG', 'app');

//Templates
// ReactiveTemplates.set('pages.notFound', 'notFound');