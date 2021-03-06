import React from "react";

function ResponsiveSideBar() {
  return (
    <>
      <Link
        className="a-left btn rounded-pill align-items-center btn-sideBarLeft py-0"
        to="/"
      >
        <div className="d-flex align-items-center">
          <svg
            viewBox="0 0 32 32"
            width={40}
            height={50}
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
              <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
            </g>
          </svg>
          <p className="text-dark fs-5 ms-2 mt-2 sideBarLeft-text">Inicio</p>
        </div>
      </Link>

      <Link
        className="btn rounded-pill btn-sideBarLeft py-0"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
        to="#"
      >
        <div className="d-flex">
          <svg
            viewBox="0 -1 32 32"
            aria-hidden="true"
            className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            width="40"
            height="50%"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <p className="text-dark fs-5 ms-2 sideBarLeft-text">Explorar</p>
        </div>
      </Link>

      <Link
        className="btn rounded-pill btn-sideBarLeft py-0"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
        to="#"
      >
        <div className="d-flex">
          <svg
            viewBox="0 -1 32 32"
            aria-hidden="true"
            className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            width="40"
            height="50%"
          >
            <g>
              <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
            </g>
          </svg>
          <p className="text-dark fs-5 ms-2 sideBarLeft-text">Notificaciones</p>
        </div>
      </Link>

      <Link
        className="btn rounded-pill btn-sideBarLeft py-0"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Lo sentimos mucho ésta funcionalidad escapa del alcance de este proyecto"
        to="#"
      >
        <div className="d-flex">
          <svg
            viewBox="0 -1 32 32"
            aria-hidden="true"
            className="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr "
            width="40"
            height="50%"
          >
            <g>
              <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
            </g>
          </svg>
          <p className="text-dark fs-5 ms-2 sideBarLeft-text">Mensajes</p>
        </div>
      </Link>
    </>
  );
}

export default ResponsiveSideBar;
