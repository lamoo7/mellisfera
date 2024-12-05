const scripts = [
  'scripts/nav.js',
  'scripts/gallery.js'
];

scripts.forEach(function(script) {
  const scriptTag = document.createElement('script');
  scriptTag.src = script;
  scriptTag.defer = true;
  document.head.appendChild(scriptTag);
});
