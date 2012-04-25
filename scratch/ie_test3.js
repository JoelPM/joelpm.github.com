(function() {
  var script_tags = document.getElementsByTagName("script");
  var this_script = script_tags[script_tags.length-1];
  document.write("This script tag has src: " + this_script.src);
})();
