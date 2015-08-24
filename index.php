<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/favicon.ico" type="image/x-icon">

        <!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->

        <link rel="stylesheet" href="assets/app/css/main.min.css">
        <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script>
    </head>
    <body>
        <?php include_once("analyticstracking.php") ?>
        <!--[if lt IE 8]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <!-- NAV -->
        <?php require_once('partials/nav.php');?>
        <!-- HEADER -->
        <?php require_once('partials/header.php');?>
        <!-- VALUES -->
        <?php require_once('partials/values.php');?>
        <!-- MISSION -->
        <?php require_once('partials/mission.php');?>
        <!-- PROJETS -->
        <?php require_once('partials/projects.php');?>
        <!-- CONTACT -->
        <?php require_once('partials/contact.php');?>
        <!-- FOOTER -->
        <?php require_once('partials/footer.php');?>


        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
        <script src="assets/app/js/main.min.js"></script>
    </body>
</html>
