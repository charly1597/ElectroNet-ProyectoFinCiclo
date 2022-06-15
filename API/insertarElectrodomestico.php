<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$nombre= $_GET["nombre"];
$precio = $_GET["precio"];
$categoria = $_GET["categoria"];
$imagen = $_GET["imagen"];
$descripcion = $_GET["descripcion"];
$bd = include_once "ConexionBD.php";
$sentencia = $bd->prepare("insert into electrodomesticos(nombre, precio, categoria, imagen, descripcion) values (?,?,?,?,?)");
$resultado = $sentencia->execute([$nombre, $precio, $categoria, $imagen, $descripcion]);
echo json_encode([
    "resultado" => $resultado,
]);
