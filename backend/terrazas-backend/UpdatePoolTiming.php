<?php



class UpdatePoolTiming
{

    public function updatePoolTimings($conn, $pool)
    {
        $sql = "UPDATE pooltimings SET poolid =:poolid, `Pool Name` =:PoolName, `Pool Opening Time` =:OpeningTime, `Pool Closing Time` =:ClosingTime WHERE poolid = :poolid";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':poolid', $pool->poolid);
        $stmt->bindParam(':PoolName', $pool->{'Pool Name'});
        $stmt->bindParam(':OpeningTime', $pool->{'Pool Opening Time'});
        $stmt->bindParam(':ClosingTime', $pool->{'Pool Closing Time'});

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        return $response;
    }
}
?>