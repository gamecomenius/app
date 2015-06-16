var g_useFacebook = true;

var defaults = {
  coins: 100,
  bombs: 3
};

var celebs = [{
  name: 'Midia 1',
  picture: 'images/midias/m1.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m2.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m3.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m4.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m5.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m6.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m7.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m8.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m9.jpg'
},{
  name: 'Midia',
  picture: 'images/midias/m10.jpg'
}];

$( document ).ready(function() {

  $( document ).on( 'click', '#menu button.play', onPlay );
  $( document ).on( 'click', '#menu button.challenge', onChallenge );
  $( document ).on( 'click', '#menu button.leaderboard', onLeaderboard );

  $( document ).on( 'click', '.friendselector .item', onChallengeItemClick );
  $( document ).on( 'click', '.leaderboard .item', onLeaderboardItemClick );

  $( document ).on( 'click', '#friendselector button.challenge.send', onChallengeSend );
  $( document ).on( 'click', '#friendselector button.invitable_friends', onChallengeShowInvitableFriends );
  $( document ).on( 'click', '#friendselector button.friends', onChallengeShowFriends );

  $( document ).on( 'click', '#gameover button.challenge', onGameOverChallenge );
  $( document ).on( 'click', '#gameover button.brag', onGameOverBrag );
  $( document ).on( 'click', '#gameover button.share_action', onGameOverShareAction );
  $( document ).on( 'click', '#gameover button.close', onGameOverClose );

  $( document ).on( 'click', 'header button.share', onShare );

  $( document ).on( 'mousedown', '#canvas', onGameCanvasMousedown );

  FB.init({
    appId: appId,
    frictionlessRequests: true,
    status: true,
    version: 'v2.3'
  });

  FB.AppEvents.activateApp();

  FB.Canvas.setDoneLoading();
  FB.Canvas.setUrlHandler( urlHandler );

  FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
  FB.Event.subscribe('auth.statusChange', onStatusChange);
});
