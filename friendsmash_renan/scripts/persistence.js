var parseAppID = 'N1lOGVWXpikgvPFJxkfkd4kRTvaPNuOWe83zRoRx';
var parseJSKey = 'nwIChKspaBSV0dFwQlKinrVD3XFXIRScCZiE1lIi';

function parseLogin(authResponse) {
  return Parse.FacebookUtils.logIn({
    id: authResponse.userID,
    access_token: authResponse.accessToken,
    expiration_date: moment().add('s', authResponse.expiresIn).format()
  }).then(function(user) {
    if( user.existed() ) {
      return userWithFBIDCheck(authResponse.userID);
    } else {
      return setDefaultUserValues();
    }
  }, function(error) {
    return Parse.Promise.error(error);
  });
}

function userWithFBIDCheck(userID) {
  console.log('Existing Parse User, checking for FBID');
  if( Parse.User.current().get('fbid') ) {
    // FBID was added before, all is well
    return Parse.Promise.as(Parse.User.current());
  } else {
    return Parse.User.current().save('fbid', userID);
  }
}

function setDefaultUserValues() {
  console.log('New Parse User, setting defaults', defaults);
  Parse.User.current().set('coins', defaults.coins);
  Parse.User.current().set('bombs', defaults.bombs);
  Parse.User.current().set('fbid', friendCache.me.id);
  return Parse.User.current().save();
}

function saveParseUser(coins, bombs) {
  Parse.User.current().increment('coins', coins);
  Parse.User.current().increment('bombs', -1 * bombs);
  return Parse.User.current().save();
}

function refreshParseUser() {
  return Parse.User.current().fetch();
}