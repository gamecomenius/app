<!DOCTYPE html>
<html>
    <head>
        <title>Game Comenius!</title>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:image" content="http://www.gamecomenius.com/img/logo_large.jpg"/>
        <link href="../bower_components/pace/themes/yellow/pace-theme-minimal.css" rel="stylesheet" type="text/css"/> 
        <script src="../bower_components/pace/pace.min.js" type="text/javascript"></script>

        <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="../bower_components/toastr/toastr.css" rel="stylesheet" type="text/css"/>

        <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">


        <link href="css/game.css" rel="stylesheet" type="text/css">
        <link href="css/custom.css" rel="stylesheet" type="text/css"/>
        <link href="css/feedbacks.css" rel="stylesheet" type="text/css"/>

        <script src="../bower_components/jquery/dist/jquery.min.js" type="text/javascript"></script> 
        <script src="../bower_components/toastr/toastr.min.js" type="text/javascript"></script>
        <script src="../bower_components/moment/min/moment-with-locales.min.js" type="text/javascript"></script> 
        <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="//connect.facebook.net/en_US/sdk.js"></script>
        <script src="js/social.js"></script>
        <script src="js/ui.js"></script>
        <script src="js/game.js"></script>
        <script src="js/core.js"></script>

    <!--[if IE]><script src="scripts/excanvas.js"></script><![endif]-->
    </head>

    <body>
        <div id="fb-root"></div>

        <header class="hidden">
            <div class="container">
                <nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container-fluid">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>

                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-left">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> 
                                        <span class="glyphicon glyphicon-list-alt"></span> <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-cart" role="menu">
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a class="text-center" href="">View Cart</a></li>
                                    </ul>
                                </li>
                            </ul>


                            <ul class="nav navbar-nav navbar-right">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> 
                                        <span class="glyphicon  glyphicon-edit"></span> <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-cart" role="menu">
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="item">
                                                <span class="item-left">
                                                    <img src="http://lorempixel.com/50/50/" alt="" />
                                                    <span class="item-info">
                                                        <span>Item name</span>
                                                        <span>23$</span>
                                                    </span>
                                                </span>
                                                <span class="item-right">
                                                    <button class="btn btn-xs btn-danger pull-right">x</button>
                                                </span>
                                            </span>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a class="text-center" href="">View Cart</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </div><!-- /.container-fluid -->
                </nav>

            </div>
            <div class="menu-center">

                <div class="menu-center-center ">
                    <div class="nav navbar-text progress" style="width: 100px; margin-top:10px">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                             aria-valuemin="0" aria-valuemax="100" style="width:70%">
                            70%
                        </div>
                    </div>
                    <div class="nav navbar-text " style="width: 48px; height: 48px; ">

                        <img src="../img/assets/LURDINHA-HEAD.png" alt="" class="menu-image"  style="width: 100%; height: 100%; "/>
                    </div>

                    <div class="nav navbar-text progress" style="width: 100px; margin-top:10px">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                             aria-valuemin="0" aria-valuemax="100" style="width:70%">
                            70%
                        </div>
                    </div>
                </div>

            </div>
        </header>

        <button class="image share"></button>

        <section id="home" class="center hidden">
            <div class="panel center">
                <div id="welcome">
                    <h1>Welcome <span class="first_name">...</span></h1>
                    <img class="profile" src="img/profile.png" />
                    <ul class="stats">
                        <li><img src="img/coin40.png" alt="Coins" /> <span class="me coins">...</span></li>
                        <li><img src="img/bomb40.png" alt="Bombs" /> <span class="me bombs">...</span></li>
                    </ul>
                </div>
                <div id="menu">
 
                    <button class="image play">Iniciar</button> 
                    <button class="image continue">Continuar</button>
                    <button class="image tutorial">Tutorial</button>
                    <button class="image config">Configurações</button>
                    <button class="image community">Ranking / Comunidade</button>
                    <button class="image history">História</button>
                    <button class="image credits">Créditos</button>
                    <button class="image exit">Sair / Salvar</button>
                    <button class="image challenge hidden"></button>
                    <button class="image leaderboard hidden"></button>
                </div>
            </div>
            <div class="panel right hidden" id="leaderboard">
                <div class="nofriends">
                    <p>Game Comenius! is better with friends! Click here to see your friends' scores</p>
                    <button class="friendPermissions">Grant user_friends</button>
                </div>
                <div class="friends">
                    <h1>Leaderboard</h1>
                    <ul class="scrollable_list leaderboard">
                        <li class="loading">Loading...</li>
                        <li class="template">
                            <img src="img/profile.png" class="profile small" />
                            <div class="namecontainer">
                                <span class="rank">1</span>. <span class="name">Ali</span>
                            </div>
                            <div class="scorecontainer">
                                Score <span class="score">99</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="panel right hidden friends" id="friendselector">
                <div class="nofriends">
                    <p>Game Comenius! is better with friends! Click here to see a list of friends to challenge.</p>
                    <button class"friendPermissions">Grant user_friends</button>
                </div>
                <div class="friends">
                    <h1>Challenge friends</h1>
                    <div class="tabs">
                        <button class="friends">Request</button>
                        <button class="invitable_friends">Invite</button>
                    </div>
                    <ul class="scrollable_list friendselector friends">
                        <li class="loading">Loading...</li>
                        <li class="template">
                            <img src="img/profile.png" class="profile small" />
                            <span class="name">...</span>
                        </li>
                    </ul>
                    <ul class="scrollable_list friendselector invitable_friends">
                        <li class="loading">Loading...</li>
                        <li class="template">
                            <img src="img/profile.png" class="profile small" />
                            <span class="name">...</span>
                        </li>
                    </ul>
                    <div class="buttons">
                        <button class="image challenge send" disabled="disabled"></button>
                    </div>
                </div>
            </div>
        </section>

        <section id="stage" class="hidden">
            <div id="gameboard">
                <canvas id="canvas"></canvas>
            </div>
            <div id="gamestats">
                <div class="message">
                    <img class="profile" src="img/profile.png" />
                    <p>Smash <span class="name">...</span></p>
                </div>
                <div class="score">
                    <p>Score <span class="score_value">...</span></p>
                </div>
                <div class="bombs"></div>
                <div class="lives"></div>
            </div>
        </section>

        <section id="gameover" class="hidden">
            <h1>Game Over!</h1>
            <img src="img/profile.png" class="profile" />
            <div class="stats">
                <p>You smashed <span class="name">...</span> <span class="score">...</span> times and collected <span class="coins">...</span> <span class="coins_plurality">coins</span>!</p>
            </div>
            <div class="buttons">
                <button class="image challenge"></button>
            </div>
            <div class="share_composer">
                <textarea placeholder="Say something about your game"></textarea>
                <div class="buttons">
                    <button class="image close"></button>
                    <button class="image share_action"></button>
                </div>
            </div>
        </section>

        <footer>
            <div class="container">
                <p><a href="https://www.facebook.com/appcenter/gamecomenius">View Game Comenius! on App Center</a></p>
            </div>
        </footer>
        <script>
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "50000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut",
            }
            var uMatch = navigator.userAgent.match(/Chrome\/(.*)$/);
            var ffVersion;
            if (uMatch && uMatch.length > 1) {
                // toastr["success"]("O jogo possuí uma melhor experiência no Navegador Google Chrome!")
            } else {
                toastr["success"]("Nós otimizamos o jogo para ter uma melhor experiência no navegador Google Chrome. Estamos trabalhando para suportar outros navegadores.")
            }



        </script>
    </body>
</html>
