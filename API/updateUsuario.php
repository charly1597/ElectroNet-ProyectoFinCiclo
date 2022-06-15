<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$id = $_GET["id"];
$nombre= $_GET["nombre"];
$password = $_GET["password"];
$email = $_GET["email"];
$sentencia = $bd->query("update usuarios set nombre = '$nombre', email = '$email', password = '$password' where id = $id");
$resultado = $sentencia->execute();
$producto = $sentencia->fetchObject();
echo json_encode($producto);

