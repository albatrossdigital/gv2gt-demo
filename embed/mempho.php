
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Give2Get Embed Code</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }

    body {
      margin-top: 70px;
    }

    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}

    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }

    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }

    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;}
    }



    .all-for-good-logo {
      display: none;
    }
  </style>
</head>
<body>

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Mempho</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a href="#/">Dashboard</a></li>
        <li><a href="#/login">Account</a></li>
      </ul>
	  
      <ul class="nav navbar-nav pull-right">
        <li><a href="#" onclick="jQuery('#embed').slideToggle();return false;">Embed Code</a></li>
      </ul>

    </div><!--/.nav-collapse -->
  </div>
</nav>

<?php

$embed = <<<EOD
<script src="https://dev.gv2gt.com/static/xdomain.js" slave="https://toolbox.gv2gt.com/proxy.html"></script>
<div id="app"></div>
<script src="https://dev.gv2gt.com/embed.js?0.1" data-partner="133"></script>
EOD;

echo '<pre id="embed" style="display: none;">' . htmlentities($embed) . '</pre>';
echo $embed;
?>


<!-- Give 2 Get embed -->


</body>
</html>

