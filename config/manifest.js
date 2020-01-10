'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "SernaDesigns",
    short_name: "serna-designs",
    description: "Portfolio application for Michael Serna",
    start_url: "https://sernadesigns.com/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#f7941e",
    icons: [
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
