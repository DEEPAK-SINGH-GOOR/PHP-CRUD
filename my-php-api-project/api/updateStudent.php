<?php
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json");

include "../config/config.php";
$config = new Config();

if ($_SERVER['REQUEST_METHOD'] == "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

    $id = $data['id'];
    $name = $data['name'];
    $email = $data['email'];

    $res = $config->updateStudent($id, $name, $email);

    if ($res) {
        echo json_encode(["message" => "Student updated successfully"]);
    } else {
        echo json_encode(["message" => "Update failed"]);
    }
} else {
    echo json_encode(["error" => "Only PUT method allowed"]);
}
?>
