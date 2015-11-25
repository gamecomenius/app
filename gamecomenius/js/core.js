var g_useFacebook = true;

var defaults = {
    coins: 100,
    bombs: 3
}

var celebs = [{
        name: 'Einstein',
        picture: 'img/celebs/einstein.png'
    }, {
        name: 'Xzibit',
        picture: 'img/celebs/xzibit.png'
    }, {
        name: 'Goldsmith',
        picture: 'img/celebs/goldsmith.png'
    }, {
        name: 'Sinatra',
        picture: 'img/celebs/sinatra.png'
    }, {
        name: 'George',
        picture: 'img/celebs/george.png'
    }, {
        name: 'Jacko',
        picture: 'img/celebs/jacko.png'
    }, {
        name: 'Rick',
        picture: 'img/celebs/rick.png'
    }, {
        name: 'Keanu',
        picture: 'img/celebs/keanu.png'
    }, {
        name: 'Arnie',
        picture: 'img/celebs/arnie.png'
    }, {
        name: 'Jean-Luc',
        picture: 'img/celebs/jeanluc.png'
    }];

//RENAN
function loadJSON() {
    $.ajax({
        url: "json/lurdinha.json",
        dataType: "json",
        success: function (lurdinha) {
            console.log(lurdinha)
            localStorage.setItem("gamecomenius.com.lurdinha", JSON.stringify(lurdinha));
            $.each(lurdinha, function (key, value) {
                console.log(key + " " + value + " " + value.fase) 
            });

            var lurdinha = JSON.parse(localStorage.getItem('gamecomenius.com.lurdinha')) || [];
            console.log("lurdinha fase: " + lurdinha[0].fase)

        }
    });
}

$(document).ready(function () {
    loadJSON();
    $(document).on('click', '#menu button.play', onPlay);
    $(document).on('click', '#menu button.challenge', onChallenge);
    $(document).on('click', '#menu button.leaderboard', onLeaderboard);

    $(document).on('click', '.friendselector .item', onChallengeItemClick);
    $(document).on('click', '.leaderboard .item', onLeaderboardItemClick);

    $(document).on('click', '#friendselector button.challenge.send', onChallengeSend);
    $(document).on('click', '#friendselector button.invitable_friends', onChallengeShowInvitableFriends);
    $(document).on('click', '#friendselector button.friends', onChallengeShowFriends);

    $(document).on('click', '#gameover button.challenge', onGameOverChallenge);
    $(document).on('click', '#gameover button.brag', onGameOverBrag);
    $(document).on('click', '#gameover button.share_action', onGameOverShareAction);
    $(document).on('click', '#gameover button.close', onGameOverClose);

    $(document).on('click', 'header button.share', onShare);

    $(document).on('mousedown', '#canvas', onGameCanvasMousedown);

    FB.init({
        appId: appId,
        frictionlessRequests: true,
        status: true,
        version: 'v2.3'
    });

    FB.AppEvents.activateApp();

    FB.Canvas.setDoneLoading();
    FB.Canvas.setUrlHandler(urlHandler);

    FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
    FB.Event.subscribe('auth.statusChange', onStatusChange);
});
