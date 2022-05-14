import React from "react";

function Trends() {
  return (
    <section id="trend-containter" className="bg-light p-4 mt-2 rounded-4">
      <div className="d-flex align-items-center justify-content-between rounded">
        <h3 className="tendencias fw-bold">Tendencias de Uruguay</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-gear tendencias"
          viewBox="0 0 16 16"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
        >
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
        </svg>
      </div>

      <div className="list-group mt-2" aria-current="true">
        <div className="list-group-item-action text-decoration-none">
          <a href="#" className="text-decoration-none">
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0 info-tendencias --fs-7">1 · Tendencias</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#727272"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>
            <h5 className="my-1 text-dark fs-6 fw-bold">React</h5>
          </a>
          <p className="info-tendencias m-0 --fs-7">
            Tendencias sobre
            <a
              href="https://reactjs.org/"
              target="_blank"
              className="tt-link ms-1 --fs-7"
            >
              React
            </a>
            .
          </p>
          <p className="info-tendencias --fs-7">1,39 M Tweets</p>
        </div>
      </div>

      <div className="list-group-item-action text-decoration-none">
        <a href="#" className="text-decoration-none">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 info-tendencias --fs-7">2 · Tendencias</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#727272"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <h5 className="my-1 text-dark fs-6 fw-bold">#JavaScript</h5>
        </a>
        <p className="info-tendencias --fs-7">1,25 M Tweets</p>
      </div>

      <div className="list-group-item-action text-decoration-none">
        <a href="#" className="text-decoration-none">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 info-tendencias --fs-7">3 · Tendencias</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#727272"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <h5 className="my-1 text-dark fw-bold fs-6">#HTML</h5>
        </a>
        <p className="info-tendencias --fs-7">120 mil Tweets</p>
      </div>

      <div className="list-group-item-action text-decoration-none">
        <a href="#" className="text-decoration-none">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 info-tendencias --fs-7">4 · Tendencias</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#727272"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <h5 className="my-1 text-dark fw-bold fs-6">Node.js</h5>
        </a>
        <p className="info-tendencias --fs-7">94,1 mil Tweets</p>
      </div>

      <div className="list-group-item-action text-decoration-none">
        <a href="#" className="text-decoration-none">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0 info-tendencias --fs-7">5 · Tendencias</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#727272"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <h5 className="my-1 text-dark fw-bold fs-6">MongoDB</h5>
        </a>
        <p className="info-tendencias --fs-7">35,9 mil Tweets</p>
      </div>

      <a className="tt-link --fs-7" href="#">
        Mostrar más
      </a>
    </section>
  );
}

export default Trends;
