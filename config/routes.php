<?php
    require 'application.php';
    $router = new Router($_SERVER['REQUEST_URI']);

    $router->get('/', array('controller' => 'HomeController', 'action' => 'index'));

    /* Fim das rotas para as áreas administrativas
    --------------------------------- */
    $router->load();
?>
