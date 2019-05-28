<?php
$Namn = $_POST['Namn']
$Företagsnamn = $_POST['Företagsnamn']
$Organisationsnummer = $_POST['Organisationsnummer']
$Email = $_POST['Email']
$Lösenord = $_POST['Lösenord']

if (!empty($Namn) || !empty($Företagsnamn) || !empty($Organisationsnummer) || !empty($Email) || !empty($Lösenord)) {
    $host = "localhost";
    $dbNamn = "root";
    $dbFöretagsnamn = "";
    $dbOrganisationsnummer "OrgNr";
    $dbEmail = "";
    $dbLösenord = "";

    $conn = new mysqli($host, $dbNamn, $dbFöretagsnamn, $dbOrganisationsnummer, $Email, $Lösenord);

    if (mysqli_connection_error()) {
        die('Connection Error('. mysqli_connection_errno().')'. mysqli_connect_error());
    
    } else {
        $SELECT = "SELECT Email From register where Email = ? Limit 1";
        $INSERT = "INSERT Into register (Namn, Företagsnamn, Organisationsnummer, Email, Lösenord) values(?,?,?,?,?)";

        //statment
        $stmt = $conn->prepare($SELECT),
        $stmt->bind_param("s", $Email);
        $stmt->execute();
        $stmt->bind_result($Email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if (rnum==0) {
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssssii", $Namn, $Företagsnamn, $Organisationsnummer, $Email, $Lösenord);
            $stmt->execute();
            echo "New record inserted sucessfully";
        } else {
            echo "Someone already register using this Email";
        }
        $stmt->close();
        $conn->close();

    }

} else {
    echo "All field are required";
    die();
}

?>