<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$id = $_GET["id"];
$categoria= $_GET["categoria"];
$sentencia = $bd->query("update categorias set categoria = '$categoria' where id = $id");
$resultado = $sentencia->execute();
$producto = $sentencia->fetchObject();
echo json_encode($producto);

