exports.config = {
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },

  conventions: {
    assets: /^(static\/assets)/
  },

  paths: {
    watched: ["static"],
    public: "priv/static"
  },

  plugins: {
    sass: {
      mode: 'native',
      indentedSyntax: true
    },
    babel: {
      ignore: [/^(static\/vendor)/]
    },
    autoprefixer: {
      browsers: ['last 8 versions'],
      cascade: false
    }
  },
  npm: {
    enabled: true
  }
};
