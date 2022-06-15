<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$email = $_GET["email"];
$password = $_GET["password"];
$name = $_GET["nombre"];
$sentencia = $bd->prepare("insert into usuarios(nombre, email, password, rol) values (?,?,?,?)");
$resultado = $sentencia->execute([$name, $email, $password, 'user']);
echo json_encode([
    "resultado" => $resultado,
]);

