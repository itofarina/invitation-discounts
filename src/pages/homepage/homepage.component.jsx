import React from 'react';

const HomePage = () => (
  <main role="main">

    <section class="jumbotron text-center mb-0">
      <div class="container">
        <h1>Cupones de descuentos oficiales</h1>
        <p class="lead text-muted">Sin publicidad, sin spam y sin engaños. Los cupones redirigen a sitios oficiales.</p>
        <p>
          <a href="https://es.airbnb.com/c/alvarof2345?currency=USD" class="btn btn-primary my-2"
            target="_blank"
            rel="noopener noreferrer">Cupón de descuento en Airbnb</a>
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div className="col-md-4"></div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-body text-center">
                <div className="row mb-4">
                  <p class="card-text"><b>Descontá 44 USD </b>en tu reserva de Airbnb usando una invitación para unirte!</p>
                </div>
                <div className="row justify-content-center mb-4">
                  <a
                    className="App-link btn btn-primary"
                    href="https://es.airbnb.com/c/alvarof2345?currency=USD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cupón oficial de Airbnb</a>
                </div>
                <div className="row justify-content-center">
                  <small class="text-muted">Este cupón te llevará al sitio de Airbnb</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>

  </main>

);

export default HomePage;