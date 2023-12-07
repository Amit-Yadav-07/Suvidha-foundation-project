
// header code .
const header = document.getElementById('header');
header.innerHTML = `<div class="container-fluid contact-section shadow">
      <div class="row d-flex align-items-center">
        <div class="col-8 d-flex align-items-center">
          <div class="contact">
            <i class="fa-solid fa-phone text-white"></i>
            <strong class="me-2 text-white">+91 7020044091</strong>
            <i class="fa-solid fa-envelope text-white"></i>
            <strong><a class="text-decoration-none text-white mail"
                href="mailto:info@suvidhafoundationedutech.org">info@suvidhafoundationedutech.org
              </a></strong>
          </div>
        </div>
        <div class="col-4">
          <div class="social-icon text-end p-2 d-flex align-items-center">
            <a href=""><i class="nav-link fa-brands fa-facebook"></i></a>
            <a href=""><i class="nav-link fa-brands fa-linkedin px-sm-3 px-2"></i></a>
            <a href=""><i class="nav-link fa-brands fa-instagram"></i></a>
            <i class="fa-regular fa-sun text-white px-sm-3 px-2"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- contact section end -->

    <div class="">
      <nav class="navbar navbar-expand-md shadow">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img src="./images/SuvidhaLogo.png" class="logo" alt="logo" /></a>
          
          <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="fa-solid fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
            
              <a class="nav-link" aria-current="page" href="#">Events</a>
              <a class="nav-link" href="./Gallery.html">Gallery</a>
              <a class="nav-link" href="contact.html">Contact</a>
              <a href="./internship.html" class="btn btn-warning my-md-0 my-2">Apply for
                internship</a>
              <a href="./help.html" class="btn btn-warning ms-2">Help now</a>
            </div>
          </div>
        </div>
      </nav>
    </div>`


// header end 


// dark mood code

let sun = document.querySelector('.fa-sun');
sun.addEventListener('click', function () {
  document.body.classList.toggle("body-active");
  sun.classList.toggle('fa-moon')

})

// dark mode end 




// --------------------------------------------------------------------------------------------------
// footer code start

const footer = document.getElementById('footer');
footer.innerHTML = `<div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="first-footer-col">
            <h5 class="fw-bold text-warning pt-3">Suvidha Foundation (Suvidha Mahila Mandal)</h5>
            <address>
              Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner
              <strong>Nagpur, Maharashtra 441102</strong>
            </address>
            <div class="icon-container">
              <a href=""><i class="nav-link fa-brands fa-facebook fa-2x"></i></a>
              <a href=""><i class="nav-link fa-brands fa-linkedin px-2 fa-2x"></i></a>
              <a href=""><i class="nav-link fa-brands fa-instagram fa-2x"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="second-footer-col">
            <h5 class="text-center pt-3 fw-bold text-warning">Certificates</h5>
            <ul class="footer-link-container">
              <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf">80G
                  Certificate</a></li>
              <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf">12A
                  Certificate</a></li>
              <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF">CSR Certificate</a>
              </li>
              <li><a
                  href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf">Suvidha
                  Darpan Registration</a></li>
              <li><a target="_blank" href="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf">Suvidha
                  Pan Card</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="third-footer-col">
            <h5 class="pt-3 text-center fw-bold text-warning">Useful Links</h5>
            <ul class="footer-link-container">
              <li><a href="">Suvidha Darpan Registration</a></li>
              <li><a href="">Suvidha Pan Card</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-8 col-12 text-center">
          <h5 class="text-white"><a class="nav-link" href="">Suvidha Foundation (Suvidha Mahila Mandal)</a> All Right Reserved.</h5>
        </div>
        <div class="col-md-4 col-12 py-md-0 py-2">
          <h5 class="text-white text-end text-md-start text-center">Created By Amit Yadav</h5>
        </div>
      </div>`;
// footer code end

// -----------------------------------------------------------------


var swiper = new Swiper(".mySwiper", {

  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 3500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



window.addEventListener('resize', function () {

  let width = this.window.outerWidth;
  console.log(width);
  if (width <= 700) {
    // just test but it's working
    var swiper = new Swiper(".mySwiper", {

      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      autoplay: {
        delay: 3500
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // just test but it's working
  } else if (width > 701 && width < 1200) {

    // just test but it's working
    var swiper = new Swiper(".mySwiper", {

      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true,
      autoplay: {
        delay: 3500
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // just test but it's working

  } else {

    // just test but it's working
    var swiper = new Swiper(".mySwiper", {

      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      autoplay: {
        delay: 3500
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // just test but it's working
  }
})



