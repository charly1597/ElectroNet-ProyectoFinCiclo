<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$id = $_GET["id"];
$sentencia = $bd->query("select * from electrodomesticos,categorias where electrodomesticos.id = $id and electrodomesticos.categoria = categorias.id");
$sentencia->execute();
$producto = $sentencia->fetchObject();
echo json_encode($producto);

