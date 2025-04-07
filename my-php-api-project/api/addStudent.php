<?php
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

require_once("../config/config.php");

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';

$db = new Config();
$success = $db->addStudent($name, $email);
$db->closeConnection();

if ($success) {
    echo json_encode(["status" => true, "message" => "Student added successfully"]);
} else {
    echo json_encode(["status" => false, "message" => "Failed to add student"]);
}
?>
