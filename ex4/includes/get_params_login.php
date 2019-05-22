<!DOCTYPE html>

<html>
    <head>
        <title>form </title>
    </head>


    <body>
        <section>
            welcome
            <?php
            
                $un = $_GET["reg_un"];
                $pw = $_GET["reg_pass"];

                if($un == "eilon" && $pw =="111")
                    echo "<h2> Good morning user" . $un . "</h2>";
                 else
                    echo  "<h2> Who are you? you can't get in</h2>";  
            ?>
        </section>
    </body>
</html>