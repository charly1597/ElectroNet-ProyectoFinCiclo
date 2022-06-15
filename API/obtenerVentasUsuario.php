<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
$bd = include_once "ConexionBD.php";
$id = $_GET["id"];
$sentencia = $bd->prepare("select ventas.id, ventas.precio, ventas.fecha, electrodomesticos.nombre, electrodomesticos.categoria, electrodomesticos.imagen from ventas,electrodomesticos where ventas.id_usuario = $id and ventas.id_elec = electrodomesticos.id order by fecha desc");
$sentencia->execute();
$usuario = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($usuario);

