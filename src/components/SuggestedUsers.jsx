import React from "react";
import abramov from "../assets/img/abramov_400x400.jpg";
import gates from "../assets/img/gates_400x400.jpg";
import otwell from "../assets/img/otwell_400x400.jpg";

function SuggestedUsers() {
  return (
    <section id="suggested-follow" className="bg-light p-4 mt-4 rounded-4">
      <h3 className="tendencias fw-bold ms-2">A quién seguir</h3>
      <div className="list-group-item-action text-decoration-none d-flex align-items-center justify-content-space-around mt-3">
        <a
          href="https://twitter.com/dan_abramov"
          className="text-decoration-none"
        >
          <div className="mx-2">
            <img
              className="rounded-circle"
              src={abramov}
              height="48"
              width="48"
              alt="..."
            />
          </div>
        </a>
        <div className="mx-1">
          <h6 className="fw-bold text-black user-suggestion m-0">дэн</h6>
          <a className="text-secondary text-decoration-none m-0">
            @dan_abramov
          </a>
        </div>
        <div className="justify-content-end ms-auto">
          <button
            className="btn btn-dark rounded-pill px-3 fw-bold followSuggestion"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
          >
            Seguir
          </button>
        </div>
      </div>
      <div className="list-group-item-action text-decoration-none d-flex align-items-center justify-content-space-around mt-3">
        <a
          href="https://twitter.com/BillGates"
          className="text-decoration-none"
        >
          <div className="mx-2">
            <img
              className="rounded-circle"
              src={gates}
              height="48"
              width="48"
              alt="..."
            />
          </div>
        </a>
        <div className="mx-1">
          <div className="d-flex align-items-center">
            <h6 className="fw-bold text-black user-suggestion m-0">
              Bill Gates
            </h6>
            <svg
              viewBox="0 0 24 24"
              aria-label="Cuenta verificada"
              fill="#1da1f2"
              width="20"
              height="20"
              className="ms-1 my-0 d-block"
            >
              <g>
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
              </g>
            </svg>
          </div>
          <a className="text-secondary text-decoration-none m-0">@BillGates</a>
        </div>
        <div className="justify-content-end ms-auto">
          <button
            className="btn btn-dark rounded-pill px-3 fw-bold followSuggestion"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
          >
            Seguir
          </button>
        </div>
      </div>
      <div className="list-group-item-action text-decoration-none d-flex align-items-center justify-content-space-around mt-3">
        <a
          href="https://twitter.com/taylorotwell"
          className="text-decoration-none"
        >
          <div className="mx-2">
            <img
              className="rounded-circle"
              src={otwell}
              height="48"
              width="48"
              alt="..."
            />
          </div>
        </a>
        <div className="mx-1">
          <h6 className="fw-bold text-black user-suggestion m-0">
            Taylor Otwell 🪐
          </h6>
          <a className="text-secondary text-decoration-none m-0">
            @taylorotwell
          </a>
        </div>
        <div className="justify-content-end ms-auto">
          <button
            className="btn btn-dark rounded-pill px-3 fw-bold followSuggestion"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
          >
            Seguir
          </button>
        </div>
      </div>
    </section>
  );
}

export default SuggestedUsers;
