<?php
$nome=$_POST("nome");
$email=$_POST("nome");

if(!empty($nome)$$ !empty($email)){
echo"<h2> cadastro realizado com sucesso <\h2>";
echo"<p> Bem-Vindo!!!, " $nome. "!<\p>";
echo"<p> Seu e-mail:, " $email. "!<\p>";

}

else{
    echo"<p> Error: Por favor, preeche direito aí";
}

?>