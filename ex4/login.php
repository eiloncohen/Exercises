<!DOCTYPE html>

<html>
    <head>
        <title>form </title>
    </head>


    <body>
        <section>
            <h1>welcome</h1>
            <?php
            
                $un = $_GET["reg_un"];
                $pw = $_GET["reg_pass"];
                if($un == "eilon" && $pw =="123456")
                    echo "<h2> Good morning " . $un . "</h2>";
                 else
                    echo  "<h2> Who are you? you can't get in</h2>";  
            ?>
        </section>
    </body>
</html>