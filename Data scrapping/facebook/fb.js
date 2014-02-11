log = console.log;
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1444576589109672',
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access
        xfbml      : true  // parse XFBML
    });

    FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response.status === 'connected') {
            testAPI();
            //friendIds();
            myposts();
        } else if (response.status === 'not_authorized') {
            FB.login();
        } else {
            FB.login();
        }
    });
};

// Load the SDK asynchronously
(function(d){
    var js, id = 'facebook-jssdk', ref =
            d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

function testAPI() {
    FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
    });
}
function myposts(id) {
    FB.api('/me/feed', function(response) {
        for(var i = 0; i < response.data.length; ++i) {
            log(response.data[i].story + '  ' + response.data[i].type);
        }
    });
}
function posts(id) {
    FB.api('/' + id + '/posts', function(response) {
        for(var i = 0; i < response.data.length; ++i) {
            log(response.data[i].story + '  ' + response.data[i].type);
        }
    });
}
function friendIds() {
    var ids = [];
    FB.api('/me/friends', function(response) {
        for(var i = 0; i < response.data.length; ++i) {
            ids.push(response.data[i].id);
        }
        for(var i = 0; i < ids.length; ++i) {
            posts(ids[i]);
        }
    });
}
