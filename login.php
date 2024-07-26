<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles_login.css">
</head>
<body>
  <div class="container">
    <div class="slideshow-container">
        <div class="mySlides fade">
            <img src="img/m1.png" style="width:100%">
        </div>
        <div class="mySlides fade">
            <img src="img/m2.png" style="width:100%">
        </div>
        <div class="mySlides fade">
            <img src="img/m3.png" style="width:100%">
        </div>
        <div class="mySlides fade">
            <img src="img/m4.png" style="width:100%">
        </div>
    </div>

    <div class="login-container">
        <form class="login-form" action="login_act.php" method="POST">
            <h2>Login</h2>
            <label for="username">User ID:</label>
            <input type="text" id="lid" name="lid" required>
            <label for="password">Password:</label>
            <input type="password" id="lpw" name="lpw" required>
            <button type="submit">Login</button>
            <a id="navbar-brand" href="user.php" >Creat A New Account</a>
        </form>
    </div>
  </div>

    <script src="script.js"></script>

</body>
</html>
