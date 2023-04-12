<?php
/**
 * Database Connection
 */
class DbConnect
{
	private $server = 'vxc4845.uta.cloud';
	private $dbname = 'vxc4845_terrazas';
	private $user = 'vxc4845_root';
	private $pass = '$lowFire55';

	public function connect()
	{
		try {
			$conn = new PDO('mysql:host=' . $this->server . ';dbname=' . $this->dbname, $this->user, $this->pass);
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $conn;
		} catch (\Exception $e) {
			echo "Database Error: " . $e->getMessage();
		}
	}
}
?>