<?php
class Config {
    private $host = "localhost";
    private $username = "root";
    private $password = "Deep@1234"; 
    private $database = "studentdb";
    public $conn;

    public function __construct() {
        // Connect to MySQL
        $this->conn = new mysqli($this->host, $this->username, $this->password);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }

        // Create database if it doesn't exist
        $this->conn->query("CREATE DATABASE IF NOT EXISTS {$this->database}");

        // Select the database
        $this->conn->select_db($this->database);

        // Create students table if it doesn't exist
        $this->conn->query("
            CREATE TABLE IF NOT EXISTS students (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL
            )
        ");
    }

    public function addStudent($name, $email) {
        $stmt = $this->conn->prepare("INSERT INTO students (name, email) VALUES (?, ?)");
        $stmt->bind_param("ss", $name, $email);
        return $stmt->execute();
    }

    public function getAllStudents() {
        $sql = "SELECT * FROM students";
        return $this->conn->query($sql);
    }

    public function updateStudent($id, $name, $email) {
        $stmt = $this->conn->prepare("UPDATE students SET name = ?, email = ? WHERE id = ?");
        $stmt->bind_param("ssi", $name, $email, $id);
        return $stmt->execute();
    }

    public function deleteStudent($id) {
        $stmt = $this->conn->prepare("DELETE FROM students WHERE id = ?");
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public function closeConnection() {
        $this->conn->close();
    }
}
?>
