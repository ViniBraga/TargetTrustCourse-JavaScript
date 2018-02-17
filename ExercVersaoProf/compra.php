<?php
session_start();

$data = require_once('data.php');

$id = (int)$_GET['id'];

$response = null;

foreach ($data as $d) {
    if ($d['id'] == $id) {
        $response = $d;
        break;
    }
}

$valor = $d['preco'];

$_SESSION['total'] = bcadd($_SESSION['total'], $valor, 2);
