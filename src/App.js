//import logo from './logo.svg';
//import Portfolio from './components/Denrees';
import './App.css';

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
      <a className="navbar-brand" href="#"><span id="pain2vie-logo">Le Pain2Vie</span></a>
      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <span className="fa fa-bars"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#presentation"><span id="menu">Présentation</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#mission"><span id="menu">Mission</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#denrees"><span id="menu">Denrées</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#partenaires"><span id="menu">Partenaires</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact"><span id="menu">Contact</span></a>
          </li>
        </ul>
      </div>
      </div>
    </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div id="pain2vie-association">Le Pain2Vie Association</div>
        <div className="intro-lead-in"><span id="matthieu10v8">"Vous avez reçu gratuitement, donnez gratuitement."<p>(Matthieu 10:8)</p></span></div>
        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#mission"><span className="fa fa-chevron-down"></span></a>
      </div>
    </div>
  </header>

  <section className="page-section" id="presentation">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Présentation</h2>
          <h3 className="section-subheading text-muted">Bienvenue sur le site de l'association "Le Pain2Vie" - Le Mans.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
        <div class="row">
          <div class="col-xl-6 col-lg-7" data-aos="fade-right">
          <img src="assets/img/about-img.jpg" class="img-fluid" alt=""></img>
          </div>
            <div class="col-xl-6 col-lg-5 pt-5 pt-lg-0">
              <h3 data-aos="fade-up">Le Pain2Vie Association</h3>
              <p data-aos="fade-up">
                Le Pain2Vie est une association chrétienne à but non lucratif dont l'existance 
                et la mission sont de venir en aide et soutenir ceux qui sont dans le besoin.
              </p>
              <div class="icon-box" data-aos="fade-up">
                <i class="bx bx-receipt"></i>
                <h4>L'épicerie solidaire</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  </section>

  
  <section className="page-section" id="mission">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Mission</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Création et Mission</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Fonctionnement</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Nous rejoindre</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="denrees" class="portfolio section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Catégories des denrées</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter=".filter-app">Fruits</li>
              <li data-filter="*" class="filter-active">Légumes</li>
              <li data-filter="*">Yaourts</li>
              <li data-filter="*">Boissons</li>
              <li data-filter=".filter-card">Patisseries</li>
              <li data-filter=".filter-web">Frais</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Legumes</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Féculents</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Viande</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Yaourts</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Boissons</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Fruits</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Patisseries</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Biscuits</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox" title="Card 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>Volailles</h4>
                <p>Disponible</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  
  <section id="team" class="team">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Nos partenaires</h2>
          <p>Ils nous soutiennent.</p>
        </div>

        <div class="row">

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="member">
              <img src="assets/img/team/team-1.jpg" class="img-fluid"/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Comerso</h4>
                </div>
                <div class="social">
                  <a><i class="icofont-phone"></i></a>
                </div>
              </div>
            </div>
            <h6>Comerso</h6>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Super U Mareil</h4>
                </div>
              </div>
            </div>
            <h6>Mareil</h6>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Super U Saint Georges du Bois</h4>
                </div>
              </div>
            </div>
            <h6>Saint Georges du Bois</h6>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
            <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Super U Bonnetable</h4>
                </div>
              </div>
            </div>
            <h6>Bonnetable</h6>
          </div>

        </div>
      </div>
    </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Nous contacter</h2>
          <h3 className="section-subheading text-muted">Si vous avez à coeur de nous contacter ou soutenir l'épicerie, ci-dessous les coordonnées.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card sm-6">
            <div class="card-body">
              <div class="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                <span class="fa fa-info-circle fa-2x text-success float-right pulse" title="online now"></span>
                <label class="name lead">Pain2vie Le Mans</label>
                <br/>
                <span class="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title="Mail"></span>
                <span class="text-muted small"> asso.pain2vie@gmail.com</span>
                <br/>
                <span class="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="Adresse"></span>
                <span class="text-muted">25 passage des arcades, 2000 le Mans</span>
                <br/>
                <span class="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="Tel"></span>
                <span class="text-muted small">(33) 06 62 42 77 87</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Faire un don</h5>
              <p className="section-subheading text-muted">Pour nous soutenir, vous pouvez télécharger notre RIB </p>
              <a href="#" class="btn btn-primary">Télécharger RIB</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Le Pain2Vie Association 2021</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
