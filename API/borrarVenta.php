<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$id = $_GET["id"];
$sentencia = $bd->query("delete from ventas where id = $id");
$sentencia->execute();
$producto = $sentencia->fetchObject();
echo json_encode($producto);

