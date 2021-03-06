exports.config = {
  sourceMaps: false,
  production: true,

  files: {
    javascripts: {
      joinTo: 'torch.js'
    },
    stylesheets: {
      joinTo: {
        'torch.css': /^(assets|node_modules)/
      }
    }
  },

  conventions: {
    assets: /^(static)/
  },

  paths: {
    watched: ['assets'],
    public: 'priv/static'
  },

  modules: {
    definition: () => {
      return `var require = window.require;`
    },
    autoRequire: {
      'torch.js': ['assets/js/torch.js']
    }
  },

  plugins: {
    babel: {
      ignore: [/^(assets\/vendor)/]
    },
    sass: {
      mode: 'native'
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    }
  },

  npm: {
    enabled: true
  }
}
