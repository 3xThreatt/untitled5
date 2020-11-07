<?php 
	$msg = "";
	if(isset($_POST['upload'])) {
		$target = "images/".basename($_FILES['image']['name']);

		$db = mysql_connect("ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", "pl5olm9uaqn9xhli", "o7mk03t99ecbrw8c", "j4hxbdarc69h9toz");

		$image = $_FILES['image']['name'];
		$text = $_POST['text'];

		$sql = "INSERT INTO images (image, text) VALUES ('$image', '$text',)";
		mysqli_query($db, $sql);

		if (move_uploaded_file($_FILES['tmp_name']['name'], $target)) {
			$msg = "Image uploaded";
		}else{
			$msg = "image not uploaded";
		}




	}
	
?>





<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div id="content">
	<form method="post" action="index.php" enctype="multipart/form-data">
	<input type="hidden" name="size" value="1000000">
	<div>
		<input type="file" name="image">
	</div>
	<div>
		<textarea name="text" cols="40" rows="4" placeholder="say something"></textarea> 	
	</div>
	<div>
		<input type="submit" name="upload" value="Upload Image">
	</div>
</form>
</div>
</body>
</html>