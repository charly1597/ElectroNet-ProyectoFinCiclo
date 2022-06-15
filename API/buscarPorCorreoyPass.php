<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT,GET,POST,DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$bd = include_once "ConexionBD.php";
$email = $_GET["email"];
$password = $_GET["password"];
$sentencia = $bd->prepare("select * from usuarios where email = '$email' and password = '$password' ");
$sentencia->execute();
$usuario = $sentencia->fetchObject();
echo json_encode($usuario);

