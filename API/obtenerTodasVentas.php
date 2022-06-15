<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$bd = include_once "ConexionBD.php";
$sentencia = $bd->query("select ventas.id, usuarios.email, electrodomesticos.nombre, electrodomesticos.precio from electrodomesticos,ventas,usuarios where ventas.id_usuario = usuarios.id and ventas.id_elec = electrodomesticos.id order by ventas.id");
$productos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($productos);

