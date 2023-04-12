<?php



class DeletePool
{

    public function deletePool($conn, $pool)
    {
        $sql = "DELETE FROM pooltimings where poolid = :poolid";
        $response = ['status' => 0, 'message' => 'Record deletion unsuccessful.'];
        if (isset($pool[3]) && is_numeric($pool[3])) {
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':poolid', $pool[3]);
            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Record deletion unsuccessful.'];
            }
            ;

        }
        return $response;
    }
}
?>