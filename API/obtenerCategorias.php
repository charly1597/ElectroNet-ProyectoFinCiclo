<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$sentencia = $bd->query("select * from categorias");
$usuarios = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($usuarios);

