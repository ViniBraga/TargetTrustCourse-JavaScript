<?php
session_start();
if (!isset($_SESSION['total'])) {
	$_SESSION['total'] = 0;
}

$data = require_once('data.php');

echo json_encode($data);
