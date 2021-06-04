$(function(){
    $.post('/ajax/access-log/',{user_agent: navigator.userAgent,referrer: document.referrer,path: location.pathname});
});
