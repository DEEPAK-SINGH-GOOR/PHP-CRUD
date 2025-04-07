<?php
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json");

include "../config/config.php";
$config = new Config();

if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'] ?? null;

    if ($id) {
        $res = $config->deleteStudent($id);
        echo json_encode(["message" => $res ? "Student deleted successfully" : "Delete failed"]);
    } else {
        echo json_encode(["message" => "ID is required for deletion"]);
    }
} else {
    echo json_encode(["error" => "Only DELETE method allowed"]);
}
?>
