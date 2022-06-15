<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
if (empty($_GET["id"])) {
    exit("No se encuentra al usuario");
}
$id = $_GET["id"];
$bd = include_once "ConexionBD.php";
$sentencia = $bd->prepare("select * from datos,usuarios where id_usuario = ? and id_usuario = usuarios.id");
$sentencia->execute([$id]);
$usuario = $sentencia->fetchObject();
echo json_encode($usuario);

