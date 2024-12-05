const scripts = [
    'scripts/nav.js',
    'scripts/lazy_loading.js',
    'scripts/gallery.js'
  ];
  
  scripts.forEach(function(script) {
    const scriptTag = document.createElement('script');
    scriptTag.src = script;
    document.head.appendChild(scriptTag);
  });
  