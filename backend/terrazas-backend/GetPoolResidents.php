<?php

// include 'DbConnect.php';

class GetPoolResidents
{

    public function getPoolResidents($conn, $path)
    {
        $sql = "SELECT * FROM poolresidents";
        //print_r($path);

        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE residentpoolid = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }
}
?>