<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$sentencia = $bd->query("select electrodomesticos.id, electrodomesticos.nombre, electrodomesticos.precio, categorias.categoria, electrodomesticos.imagen from electrodomesticos,categorias where electrodomesticos.categoria = categorias.id order by electrodomesticos.id");
$productos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($productos);
