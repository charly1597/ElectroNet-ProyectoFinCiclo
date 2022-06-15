<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$id_usu = $_GET["id_usu"];
$id_elec = $_GET["id_elec"];
$precio = $_GET["precio"];
$bd = include_once "ConexionBD.php";
$sentencia = $bd->prepare("insert into ventas(id_usuario, id_elec, precio) values (?,?,?)");
$resultado = $sentencia->execute([$id_usu, $id_elec, $precio]);
echo json_encode([
    "resultado" => $resultado,
]);

