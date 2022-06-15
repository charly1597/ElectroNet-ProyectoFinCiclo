<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$id = $_GET["id"];
$nombre= $_GET["nombre"];
$precio = $_GET["precio"];
$categoria = $_GET["categoria"];
$imagen = $_GET["imagen"];
$descripcion = $_GET["descripcion"];
$sentencia = $bd->query("update electrodomesticos set nombre = '$nombre', precio = $precio, categoria = $categoria, imagen = '$imagen', descripcion = '$descripcion' where id = $id");
$resultado = $sentencia->execute();
$producto = $sentencia->fetchObject();
echo json_encode($producto);

