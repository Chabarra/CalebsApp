/*
 jQuery Plugin: Query YQL - version 0.4

 LICENSE: http://hail2u.mit-license.org/2009
*/
(function(c){c.queryYQL=function(d,b,a,e){c.isFunction(b)?(e=b,b="json"):b.match(/(json|xml)/)?c.isFunction(a)&&(e=a,a=void 0):(e=a,a=b,b="json");var f="https:"===document.location.protocol?"https":"http",d={format:b,q:d};"all"===a&&(a=f+"://datatables.org/alltables.env");if(a)d.env=a;return c.get(f+"://query.yahooapis.com/v1/public/yql?callback=?",d,e,"json")}})(jQuery);
