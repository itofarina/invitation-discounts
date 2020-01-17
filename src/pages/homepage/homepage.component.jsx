import React, { useEffect } from 'react';
import { Event, PageView } from '../../utilities/tracking.utils.js';

const HomePage = () => {

  useEffect(() => {
    PageView();
  });

  return (
    <main role="main">
      <section className="jumbotron text-center mb-0">
        <div className="container">
          <h1>Cupones de descuentos oficiales</h1>
          <p className="lead text-muted">
            Sin publicidad, sin spam y sin engaños. <b className="text-success">Los cupones redirigen a sitios oficiales.</b>
          </p>
          <p>
            <a href="https://es.airbnb.com/c/alvarof2345?currency=USD"
              className="btn btn-primary my-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Event('AIRBNB', 'Click', 'AIRBNB_HEAD_BUTTON')}
            >Cupón de descuento en Airbnb</a>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body text-center">
                  <div className="row mb-4">
                    <p className="card-text"><b>Descontá 44 USD </b>en tu reserva de Airbnb usando una invitación para unirte!</p>
                  </div>
                  <div className="row justify-content-center mb-4">
                    <a
                      className="App-link btn btn-primary"
                      href="https://es.airbnb.com/c/alvarof2345?currency=USD"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => Event('AIRBNB', 'Click', 'AIRBNB_BODY_BUTTON')}
                    >
                      Cupón oficial de Airbnb</a>
                  </div>
                  <div className="row justify-content-center">
                    <small className="text-muted">Este cupón te llevará al sitio de Airbnb</small>
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
};

export default HomePage;