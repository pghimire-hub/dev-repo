<?php



class UpdatePoolResident
{

    public function updatePoolResident($conn, $pool)
    {
        $sql = "UPDATE poolresidents SET residentpoolid =:poolid, residentname =:PoolName, pool =:OpeningTime WHERE residentpoolid = :poolid";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':poolid', $pool->residentpoolid);
        $stmt->bindParam(':PoolName', $pool->residentname);
        $stmt->bindParam(':OpeningTime', $pool->pool);
        //$stmt->bindParam(':ClosingTime', $pool->{'Pool Closing Time'});

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        return $response;
    }
}
?>