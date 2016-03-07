/**
 * 
 *//*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){var pluses=/\+/g;function raw(s){return s;}function decoded(s){return decodeURIComponent(s.replace(pluses,' '));}function converted(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}try{return config.json?JSON.parse(s):s;}catch(er){}}var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days);}value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}var decode=config.raw?raw:decoded;var cookies=document.cookie.split('; ');var result=key?undefined:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=decode(parts.join('='));if(key&&key===name){result=converted(cookie);break;}if(!key){result[name]=converted(cookie);}}return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,'',$.extend({},options,{expires:-1}));return true;}return false;};}));

function setCookie() {
  $.cookie("visited", "true", { expires: 365 });
}

if ($.cookie('visited') != 'true') {
  $('#welcome, .overlay').show(100);
  setCookie();
} else {
  $('#welcome').remove();
}

$('#sidebar').click(function() {
  $('#welcome').hide(100);
    $('.overlay').fadeOut(100);
});

$('#sidebar').mouseover(function(){
	
	$('.overlay').fadeOut(100);
});

$('#thesisDoc').click(function(){
	window.open('http://library.uh.edu/record=b6912261~S9', '_blank');
	
});
$('#thesisDocs').click(function(){
	window.open('http://library.uh.edu/record=b6912261~S9', '_blank');
	
});
$('#paperPub').click(function(){
	window.open('http://airccj.org/CSCP/vol2/csit2315.pdf', '_blank');
});
$('#paperPub2').click(function(){
	window.open('http://airccj.org/CSCP/vol2/csit2315.pdf', '_blank');
});

// $.cookie("visited", null);

$(window).load(function(){
    $('.bwWrapper').BlackAndWhite({
        hoverEffect : true, // default true
        // set the path to BnWWorker.js for a superfast implementation
        webworkerPath : false,
        // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
        intensity:1,
        speed: { //this property could also be just speed: value for both fadeIn and fadeOut
            fadeIn: 200, // 200ms for fadeIn animations
            fadeOut: 800 // 800ms for fadeOut animations
        }
    });
});