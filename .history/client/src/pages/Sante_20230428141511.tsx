import React, { useState, useEffect } from "react";
import "./Style2.css";


function Sante(){
    return(
        <div className="container" style={{ width: "100vw" }}>
        <div className="form-group d-flex">
          <input className="rech" placeholder=" recherchez un utilisateur ..." />
        </div>
        <h6></h6>
        <table className="table border border-dark mt-4">
          <thead className="the">
            <tr>
              <th>Dates | Données</th>
              <th>Rythme cardiaque</th>
              <th>Pression artérielle</th>
            </tr>
          </thead>
          <tbody>
            {/* {dataAffichee.map((item) => ( */}
            <tr>
              <td>1</td>
              <td>Maman</td>
              <td>Diallo</td>
             
            </tr>
            {/*             ))}
   */}            </tbody>
        </table>
  <div className="d-flex justify-content-center fixed-bottom">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link text-dark" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link text-dark" href="#">1</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
            <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link text-dark" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    );
}
export default Sante;