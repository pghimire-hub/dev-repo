<?php



class InsertPoolTimings
{

    public function insertPoolTimings($conn, $pool)
    {
        $sql = "INSERT INTO pooltimings
        (`Pool Name`, `Pool Opening Time`, `Pool Closing Time`)
        VALUES(:PoolName, :OpeningTime, :ClosingTime);
        ";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':PoolName', $pool->{'Pool Name'});
        $stmt->bindParam(':OpeningTime', $pool->{'Pool Opening Time'});
        $stmt->bindParam(':ClosingTime', $pool->{'Pool Closing Time'});
        echo json_encode($stmt);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create a record'];
        }
        return $response;
    }
}
?>