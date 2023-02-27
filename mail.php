<!DOCTYPE html>

<html lang="pl">
  <head>
    <head>
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-BYWWTQ1X3P"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-BYWWTQ1X3P");
    </script>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zakład Geodezyjny Norbert Rakowiecki - geodeta Szczecin</title>
    <meta
      name="description"
      content="Geodezja Szczecin - podział nieruchomości, wytyczenia budynków, wznowienia granic, geodezyjna obsługa inwestycji, mapy do celów projektowych - 531-446-800"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    
    <link rel="stylesheet" href="./css/main.css" />
      <meta
      name="google-site-verification"
      content="W0_Az0iFJn2zDqf3Dio_pRib2ySu7OPBgRmwdMxk6Rs"
    />
  </head>
  <body class="font-montserrat">
    <header>
       <nav id="nav" class="container">
          <a class="nav-logo" href="/"
          ><img
            width="48px"
            height="56px"
            class="logo-img"
            src="assets/zaklad-geodezyjny-nr-logo.webp"
            alt="Logo Zakładu Geodezyjnego Norbert Rakowiecki - żółty trójnóg"
        /></a>
        <div class="toggle-btn">
          <button class="btn" aria-label="mobile navigation">
            <img
              src="assets/menu.png"
              alt="mobile menu"
              width="32px"
              height="32px"
            />
          </button>
        </div>
        <div class="nav-menu flex-grow">
          <ul class="flex">
            <li><a href="/#o-nas">O nas</a></li>
            <li><a href="/#uslugi-geodezyjne">Usługi geodezyjne</a></li>
            <li><a href="/#ostatnie-realizacje">Ostatnie realizacje</a></li>
            <li><a href="/#kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div class="nav-cta">
          <a class="btn btn-primary btn-shadow" href="/#kontakt"
            >Zadaj pytanie</a
          >
        </div>
      </nav>
    </header>
    <main>
      <div class="box-info container text-md text-center px-sm" >
        <?php
          $to='biuro@geodezja-rakowiecki.pl';
          $email=$_POST['e-mail'];
          $subject='Nowa wiadomość ze strony internetowej od: ' . $email;
          $message=$_POST['message'];
          $headers='From:' . $email . "\r\n" .
          $headers .='Content-Type: text/plain; charset=utf-8' . "\r\n";
          mail($to, $subject, $message, $headers);
        ?>
        <p>Dziękujemy za wiadomość.</p>
        <p>Postaramy się odpowiedzieć najszybciej, jak to możliwe. </p>
        <div class="mx-auto">
          <a class="btn btn-primary text-sm btn-shadow" href="/">Wróć do strony</a>
        </div>
      </div>
        
    </main>
    <footer class="container text-center">
      <p>
        &copy; Copyright 2022, Zakład Geodezyjny Norber Rakowiecki |
        <a href="#polityka-prywatnosci">Polityka prywatności</a>
      </p>
      <small
        >Icons created by
        <a href="https://www.flaticon.com/authors/freepik"> Freepik </a>
        from <a href="https://www.flaticon.com/">www.flaticon.com</a></small
      >
    </footer>

   <script>// Mobile menu

const toggle = document.querySelector("nav .toggle-btn");
const mobileMenu = document.querySelector("nav .nav-menu");
const navItems = document.querySelectorAll(".nav-menu li a");

const showMobileMenu = () => {
  mobileMenu.classList.add("active");
};

toggle.addEventListener("click", showMobileMenu);

const hideMobileMenu = () => {
  mobileMenu.classList.remove("active");
};

for (const navItem of navItems) {
  navItem.addEventListener("click", hideMobileMenu);
}</script>
  </body>
</html>

