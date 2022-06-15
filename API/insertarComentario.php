<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$id_usu = $_GET["id_usu"];
$id_elec = $_GET["id_elec"];
$comentario = $_GET["comentario"];
$bd = include_once "ConexionBD.php";
$sentencia = $bd->prepare("insert into comentarios(id_usuario, id_elec, comentario) values (?,?,?)");
$resultado = $sentencia->execute([$id_usu, $id_elec, $comentario]);
echo json_encode([
    "resultado" => $resultado,
]);
