import React, { useState, useEffect } from "react";
import "./Style2.css";


function Admin() {

  return (
    <div className="container" style={{ width: "100vw" }}>
      <div className="form-group d-flex">
        <input className="rech" placeholder=" recherchez un utilisateur ..." />
        <a href=""><img className="ima" src="../../src/assets/archi.png" alt="Achivés" toolti />
        </a>
      </div>
      <h6>Liste de tous les utilisateurs actifs</h6>
      <table className="table border border-dark mt-4">
        <thead className="the">
          <tr>
            <th>ID Cane</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {dataAffichee.map((item) => ( */}
          <tr>
            <td>MAT109</td>
            <td>Maman</td>
            <td>Diallo</td>
            <td className="ico"><span className="material-symbols-outlined">
              archive </span></td>
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


export default Admin;