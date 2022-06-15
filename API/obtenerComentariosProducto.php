<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
$bd = include_once "ConexionBD.php";
$id = $_GET["id"];
$sentencia = $bd->prepare("select distinct usuarios.nombre, usuarios.email, comentarios.comentario, comentarios.fecha from comentarios,usuarios,electrodomesticos where comentarios.id_elec = $id and comentarios.id_usuario = usuarios.id order by fecha desc");
$sentencia->execute();
$usuario = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($usuario);

