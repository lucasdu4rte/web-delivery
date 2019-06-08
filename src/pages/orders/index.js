import React from "react";
import NavBar from "components/NavBar";
import pizza from 'images/Pizzas/1.png'

const Orders = ({ user, token }) => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="columns">
          <div className="column col-8 col-mx-auto p-2 mt-2">
            <strong>Últimos pedidos</strong>

            <div
              className="card mt-2"
              style={{
                border: 0,
                boxShadow: "0 0.25rem 1rem rgba(48,55,66,.15)"
              }}
            >
              <div className="card-header">
                <div className="card-title h6">
                  Pedido <strong>#3</strong> - Diego Schell Fernandes
                </div>
                <small className="card-subtitle text-gray">há 2 segundos</small> <br />
                <strong className="card-subtitle text-dark">R$42,00</strong>
              </div>

              <div className="card-body">
                <div className="divider"></div>
                <div className="columns">

                  <div className="column">
                    <div className="tile p-2" style={{ border: '1px solid #f1f2f6' }}>
                      <div className="tile-icon">
                        <div className="">
                          {/* <i className="icon icon-file centered" /> */}
                          <img className="centered" src={pizza} alt="" width={60} />
                        </div>
                      </div>
                      <div className="tile-content">
                        <div className="tile-title">Pizza Calabresa</div>
                        <small className="tile-subtitle">Tamanho: Média</small>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="tile p-2" style={{ border: '1px solid #f1f2f6' }}>
                      <div className="tile-icon">
                        <div className="">
                          {/* <i className="icon icon-file centered" /> */}
                          <img className="centered" src={pizza} alt="" width={60} />
                        </div>
                      </div>
                      <div className="tile-content">
                        <div className="tile-title">Coca Cola</div>
                        <small className="tile-subtitle">Lata 300ML</small>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="divider"></div>
              </div>

              <div className="card-footer">
                <strong>Observações: </strong>
                Favor remover o tomate da pizza.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
