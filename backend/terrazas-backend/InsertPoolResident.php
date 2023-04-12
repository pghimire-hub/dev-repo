<?php



class InsertPoolResident
{

    public function insertPoolResident($conn, $pool)
    {
        $sql = "INSERT INTO poolresidents
        (residentname, pool)
        VALUES(:residentname, :pool);
        ";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':residentname', $pool->{'residentname'});
        $stmt->bindParam(':pool', $pool->{'poolsaccessto'});

        //echo json_encode($stmt);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create a record'];
        }
        return $response;
    }
}
?>