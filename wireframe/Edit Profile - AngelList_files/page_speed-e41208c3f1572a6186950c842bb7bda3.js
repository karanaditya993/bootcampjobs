(function(){define(["jquery"],function(t){return{track:function(e){var n,r;if(0===Math.floor(10*Math.random())&&(r="undefined"!=typeof performance&&null!==performance&&null!=(n=performance.timing)?n.navigationStart:void 0))return t.post("/page_speeds/track",{page:e,seconds:((new Date).getTime()-r)/1e3})}}})}).call(this);