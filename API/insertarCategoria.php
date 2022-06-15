<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$categoria = $_GET["categoria"];
$bd = include_once "ConexionBD.php";
$sentencia = $bd->prepare("insert into categorias(categoria) values (?)");
$resultado = $sentencia->execute([$categoria]);
echo json_encode([
    "resultado" => $resultado,
]);

