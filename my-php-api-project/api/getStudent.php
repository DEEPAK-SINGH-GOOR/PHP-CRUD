<?php
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

include "../config/config.php";
$config = new Config();

if ($_SERVER['REQUEST_METHOD'] == "GET") {
    $result = $config->getAllStudents();
    $students = [];

    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }

    echo json_encode($students);
} else {
    echo json_encode(["error" => "Only GET method allowed"]);
}
?>
