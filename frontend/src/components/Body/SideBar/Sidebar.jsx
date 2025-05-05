import React from 'react';
import Editor from '../../../assets/editor.png';
import New from '../../../assets/sign.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <aside className="hidden md:flex flex-col w-47 bg-gray-100 border-r border-gray-100 h-auto pt-20 px-4 space-y-2 shadow-sm z-20">
      {/* Add logo image here if needed */}
      {/* Navigation links */}
      <nav className="flex flex-col gap-2 mt-4">
        <Link to="/" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <g className="nc-icon-wrapper">
              <path fill="#A0041E" d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"></path>
              <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
              <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
              <path fill="#66757F" d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"></path>
              <path fill="#66757F" d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"></path>
              <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
              <path fill="#55ACEE" d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"></path>
              <path fill="#5C913B" d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"></path>
            </g>
          </svg>
          Home
        </Link>
        <Link
          to="/code-editor"
          className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium"
        >
          <img src={Editor} alt="editor" width={24} height={24} />
          Code Editor
          <img src={New} alt="editor" width={24} height={24} />

        </Link>

        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.000000 102.000000" width="24" height="24" preserveAspectRatio="xMidYMid meet" fill="#3b49df">

            <g transform="translate(0.000000,102.000000) scale(0.100000,-0.100000)" fill="#3b49df" stroke="none">
              <path d="M305 953 c-42 -22 -64 -43 -83 -78 -14 -25 -18 -76 -22 -305 -7 -313
-12 -336 -96 -450 -24 -33 -44 -62 -44 -65 0 -3 318 -4 708 -3 l707 3 47 27
c32 20 52 41 67 72 21 43 22 54 19 374 l-3 330 -31 39 c-61 76 -30 73 -669 73
-500 -1 -574 -3 -600 -17z m405 -278 l0 -84 83 -3 82 -3 0 -75 0 -75 -82 -3
-83 -3 0 -84 0 -85 -75 0 -75 0 0 85 0 85 -75 0 c-41 0 -75 3 -75 8 0 4 8 39
18 77 l18 70 57 3 57 3 0 84 0 85 75 0 75 0 0 -85z m578 -2 l3 -82 82 -3 82
-3 0 -75 0 -75 -82 -3 -82 -3 -3 -82 -3 -82 -75 0 -75 0 -3 83 -3 82 -79 0
-80 0 0 80 0 80 80 0 80 0 0 78 c0 43 3 82 7 86 4 4 39 5 78 4 l70 -3 3 -82z"></path>
            </g>
          </svg>
          DEV++
        </a>
        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <g className="nc-icon-wrapper">
              <path fill="#67757F" d="M39 24c0 2.209-1.791 2-4 2H9c-2.209 0-4 .209-4-2l2-12c.125-1.917 1.791-4 4-4h22c2.209 0 3.791 2.208 4 4l2 12z"></path>
              <path fill="#CCD6DD" d="M32 17a2 2 0 01-2 2H14a2 2 0 01-2-2V9a2 2 0 012-2h16a2 2 0 012 2v8z"></path>
              <path fill="#E1E8ED" d="M34 21a2 2 0 01-2 2H12a2 2 0 01-2-2v-8a2 2 0 012-2h20a2 2 0 012 2v8z"></path>
              <path fill="#F5F8FA" d="M36 25a2 2 0 01-2 2H10a2 2 0 01-2-2v-8a2 2 0 012-2h24a2 2 0 012 2v8z"></path>
              <path fill="#9AAAB4" d="M39 35a4 4 0 01-4 4H9a4 4 0 01-4-4V24a4 4 0 014-4h26a4 4 0 014 4v11z"></path>
              <path fill="#67757F" d="M18 16zm0 0z"></path>
              <path fill="#FCAB40" d="M26 5h-5a2 2 0 00-2 2v1h4a2 2 0 012 2h1a2 2 0 002-2V7a2 2 0 00-2-2z"></path>
              <path fill="#5DADEC" d="M22 9h-5a2 2 0 00-2 2v1h4a2 2 0 012 2h1a2 2 0 002-2v-1a2 2 0 00-2-2z"></path>
              <path fill="#E75A70" d="M20 16a2 2 0 01-2 2h-5a2 2 0 01-2-2v-1a2 2 0 012-2h5a2 2 0 012 2v1z"></path>
              <path fill="#67757F" d="M29 32a2 2 0 01-2 2H17a2 2 0 01-2-2v-5a2 2 0 012-2h10a2 2 0 012 2v5zm-11-4z"></path>
              <path fill="#E1E8ED" d="M27 31a1 1 0 01-1 1h-8a1 1 0 01-1-1v-3a1 1 0 011-1h8a1 1 0 011 1v3z"></path>
            </g>
          </svg>
          Reading List
        </a>
        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <g className="nc-icon-wrapper">
              <path fill="#292F33" d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"></path>
              <path fill="#66757F" d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"></path>
              <path fill="#99AAB5" d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"></path>
              <g fill="#292F33" transform="translate(4 4)">
                <circle cx="15.5" cy="2.5" r="1.5"></circle>
                <circle cx="20.5" cy="2.5" r="1.5"></circle>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                <circle cx="22.5" cy="6.5" r="1.5"></circle>
                <circle cx="12.5" cy="6.5" r="1.5"></circle>
                <circle cx="15.5" cy="10.5" r="1.5"></circle>
                <circle cx="10.5" cy="10.5" r="1.5"></circle>
                <circle cx="20.5" cy="10.5" r="1.5"></circle>
                <circle cx="25.5" cy="10.5" r="1.5"></circle>
                <circle cx="17.5" cy="14.5" r="1.5"></circle>
                <circle cx="22.5" cy="14.5" r="1.5"></circle>
                <circle cx="12.5" cy="14.5" r="1.5"></circle>
              </g>
              <path fill="#66757F" d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"></path>
              <path fill="#66757F" d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"></path>
            </g>
          </svg>
          Podcast
        </a>
        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <g transform="translate(4 4)">
              <path fill="#31373D" d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"></path>
              <circle fill="#8899A6" cx="24" cy="19" r="2"></circle>
              <circle fill="#8899A6" cx="9" cy="19" r="2"></circle>
              <path fill="#8899A6" d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"></path>
            </g>
          </svg>
          Videos
        </a>
        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <g className="nc-icon-wrapper">
              <path fill="#FFD983" d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"></path>
              <path fill="#D99E82" d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"></path>
              <path fill="#C1694F" d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"></path>
            </g>
          </svg>
          Tags
        </a>

        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <g className="nc-icon-wrapper">
              <path fill="#FFD983" d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"></path>
              <path fill="#CCD6DD" d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"></path>
              <path fill="#FFCC4D" d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"></path>
              <path fill="#99AAB5" d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"></path>
              <path fill="#CCD6DD" d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"></path>
            </g>
          </svg>
          DEV Help
        </a>

        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="24" height="24"><path fill="#F4900C" d="M11 0C6.582 0 3 3.582 3 8v8h2V8c0-3.313 2.687-6 6-6 3.314 0 6 2.687 6 6v8h2V8c0-4.418-3.582-8-8-8z"></path><path fill="#DD2E44" d="M1 8l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H1z"></path><path fill="#FFCC4D" d="M25 5c-4.418 0-8 3.582-8 8v8h2v-8c0-3.314 2.688-6 6-6 3.315 0 6 2.686 6 6v8h2v-8c0-4.418-3.582-8-8-8z"></path><path fill="#744EAA" d="M15 13l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H15z"></path></svg>
          Forem Shop
        </a>

        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <path fill="#DD2E44" d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"></path>
          </svg>
          Advertise on DEV
        </a>

        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="24" height="24"><path fill="#FFAC33" d="M5.123 5h6C12.227 5 13 4.896 13 6V4c0-1.104-.773-2-1.877-2h-8c-2 0-3.583 2.125-3 5 0 0 1.791 9.375 1.917 9.958C2.373 18.5 4.164 20 6.081 20h6.958c1.105 0-.039-1.896-.039-3v-2c0 1.104-.773 2-1.877 2h-4c-1.104 0-1.833-1.042-2-2S3.539 7.667 3.539 7.667C3.206 5.75 4.018 5 5.123 5zm25.812 0h-6C23.831 5 22 4.896 22 6V4c0-1.104 1.831-2 2.935-2h8c2 0 3.584 2.125 3 5 0 0-1.633 9.419-1.771 10-.354 1.5-2.042 3-4 3h-7.146C21.914 20 22 18.104 22 17v-2c0 1.104 1.831 2 2.935 2h4c1.104 0 1.834-1.042 2-2s1.584-7.333 1.584-7.333C32.851 5.75 32.04 5 30.935 5zM20.832 22c0-6.958-2.709 0-2.709 0s-3-6.958-3 0-3.291 10-3.291 10h12.292c-.001 0-3.292-3.042-3.292-10z"></path><path fill="#FFCC4D" d="M29.123 6.577c0 6.775-6.77 18.192-11 18.192-4.231 0-11-11.417-11-18.192 0-5.195 1-6.319 3-6.319 1.374 0 6.025-.027 8-.027l7-.001c2.917-.001 4 .684 4 6.347z"></path><path fill="#C1694F" d="M27 33c0 1.104.227 2-.877 2h-16C9.018 35 9 34.104 9 33v-1c0-1.104 1.164-2 2.206-2h13.917c1.042 0 1.877.896 1.877 2v1z"></path><path fill="#C1694F" d="M29 34.625c0 .76.165 1.375-1.252 1.375H8.498C7.206 36 7 35.385 7 34.625v-.25C7 33.615 7.738 33 8.498 33h19.25c.759 0 1.252.615 1.252 1.375v.25z"></path></svg>
          DEV Challenge
        </a>

        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="24" height="24"><path fill="#FFAC33" d="M34.347 16.893l-8.899-3.294-3.323-10.891c-.128-.42-.517-.708-.956-.708-.439 0-.828.288-.956.708l-3.322 10.891-8.9 3.294c-.393.146-.653.519-.653.938 0 .418.26.793.653.938l8.895 3.293 3.324 11.223c.126.424.516.715.959.715.442 0 .833-.291.959-.716l3.324-11.223 8.896-3.293c.391-.144.652-.518.652-.937 0-.418-.261-.792-.653-.938z"></path><path fill="#FFCC4D" d="M14.347 27.894l-2.314-.856-.9-3.3c-.118-.436-.513-.738-.964-.738-.451 0-.846.302-.965.737l-.9 3.3-2.313.856c-.393.145-.653.52-.653.938 0 .418.26.793.653.938l2.301.853.907 3.622c.112.444.511.756.97.756.459 0 .858-.312.97-.757l.907-3.622 2.301-.853c.393-.144.653-.519.653-.937 0-.418-.26-.793-.653-.937zM10.009 6.231l-2.364-.875-.876-2.365c-.145-.393-.519-.653-.938-.653-.418 0-.792.26-.938.653l-.875 2.365-2.365.875c-.393.146-.653.52-.653.938 0 .418.26.793.653.938l2.365.875.875 2.365c.146.393.52.653.938.653.418 0 .792-.26.938-.653l.875-2.365 2.365-.875c.393-.146.653-.52.653-.938 0-.418-.26-.792-.653-.938z"></path></svg>
          DEV Showcase
        </a>

        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            version="1.1"
            viewBox="0 0 47.5 47.5"
            style={{ enableBackground: "new 0 0 47.5 47.5" }}
            id="svg2"
            xmlSpace="preserve"
          >
            <defs id="defs6">
              <clipPath id="clipPath18">
                <path d="M 0,38 38,38 38,0 0,0 0,38 z" id="path20" />
              </clipPath>
            </defs>
            <g transform="matrix(1.25,0,0,-1.25,0,47.5)" id="g12">
              <g id="g14">
                <g clipPath="url(#clipPath18)" id="g16">
                  <g transform="translate(37,19)" id="g22">
                    <path
                      d="m 0,0 c 0,-9.941 -8.059,-18 -18,-18 -9.941,0 -18,8.059 -18,18 0,9.941 8.059,18 18,18 C -8.059,18 0,9.941 0,0"
                      id="path24"
                      style={{ fill: "#ffcc4d", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }}
                    />
                  </g>
                  <g transform="translate(2.2402,25.9824)" id="g26">
                    <path
                      d="m 0,0 c 0.24,-0.239 1.437,-0.958 1.677,-1.675 0.24,-0.717 0.72,-4.784 2.158,-5.981 1.484,-1.233 7.077,-0.774 8.149,-0.24 2.397,1.195 2.691,4.531 3.115,6.221 0.239,0.957 1.677,0.957 1.677,0.957 0,0 1.439,0 1.678,-0.956 0.424,-1.691 0.72,-5.027 3.115,-6.221 1.073,-0.535 6.666,-0.994 8.152,0.239 1.435,1.197 1.915,5.264 2.155,5.982 0.238,0.717 1.437,1.435 1.677,1.674 0.241,0.239 0.241,1.196 0,1.436 C 33.074,1.914 27.419,2.34 21.33,1.675 20.115,1.542 19.653,1.196 16.776,1.196 13.901,1.196 13.438,1.542 12.223,1.674 6.136,2.34 0.479,1.914 0,1.436 -0.239,1.196 -0.239,0.239 0,0"
                      id="path28"
                      style={{ fill: "#292f33", fillOpacity: 1, fillRule: "evenodd", stroke: "none" }}
                    />
                  </g>
                  <g transform="translate(28.335,13.3711)" id="g30">
                    <path
                      d="m 0,0 c -0.178,0.161 -0.444,0.171 -0.635,0.029 -0.039,-0.029 -3.922,-2.9 -8.7,-2.9 -4.766,0 -8.662,2.871 -8.7,2.9 -0.191,0.142 -0.457,0.13 -0.635,-0.029 -0.177,-0.16 -0.217,-0.424 -0.094,-0.628 0.129,-0.215 3.217,-5.243 9.429,-5.243 6.212,0 9.301,5.028 9.429,5.243 C 0.217,-0.423 0.178,-0.16 0,0"
                      id="path32"
                      style={{ fill: "#664500", fillOpacity: 1, fillRule: "nonzero", stroke: "none" }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          About
        </a>


        <a href="#" className="flex items-center px-3 py-2 rounded hover:bg-gray-50 text-gray-700 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
            <g className="nc-icon-wrapper">
              <path fill="#FFAC33" d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"></path>
              <path fill="#BE1931" d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"></path>
              <path fill="#BE1931" d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"></path>
            </g>
          </svg>
          Contact
        </a>
        {/* Add more links as needed */}
      </nav>
      {/* Other sections */}
      <div className="mt-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Other</h3>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 text-sm">Code of Conduct</a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 text-sm">Privacy Policy</a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700 text-sm">Terms of use</a>
      </div>
      <aside className="p-4">
  <div className="mb-4 flex flex-wrap gap-3">
    <a
      href="https://x.com/thepracticaldev"
      target="_blank"
      rel="noopener me"
      className="block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-50 -50 620 620" role="img" aria-labelledby="anuo0u8u03p2ur55gsy2hzclnqi4jgg4" className="w-6 h-6" width="24" height="24">
        <title id="anuo0u8u03p2ur55gsy2hzclnqi4jgg4">Twitter</title>
        <path d="M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z" fill="#000"></path>
      </svg>
    </a>

    <a
      href="https://facebook.com/thepracticaldev"
      target="_blank"
      rel="noopener me"
      className="block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aeffrunlu03cgkj1h0l1mwrqp4geav9h">
        <title id="aeffrunlu03cgkj1h0l1mwrqp4geav9h">Facebook</title>
        <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
      </svg>
    </a>

    <a
      href="https://github.com/forem"
      target="_blank"
      rel="noopener me"
      className="block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aj1z7zvulo3qqtjujnkibtdq98q3otra">
        <title id="aj1z7zvulo3qqtjujnkibtdq98q3otra">Github</title>
        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
      </svg>
    </a>

    <a
      href="https://instagram.com/thepracticaldev"
      target="_blank"
      rel="noopener me"
      className="block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="aorrylnguf98ak2bdqnsojj3zbo2u9nm">
        <title id="aorrylnguf98ak2bdqnsojj3zbo2u9nm">Instagram</title>
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
      </svg>
    </a>

    <a
      href="https://twitch.com/thepracticaldev"
      target="_blank"
      rel="noopener me"
      className="block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ajy7nmfjyokj5atj3ztxbsio1zyvnqh4">
        <title id="ajy7nmfjyokj5atj3ztxbsio1zyvnqh4">Twitch</title>
        <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
      </svg>
    </a>

    <a
      href="https://fosstodon.org/@thepracticaldev"
      target="_blank"
      rel="noopener me"
      className="block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3hxhbmmulng7kzz9nfyt66i7rjz7o8z">
        <title id="a3hxhbmmulng7kzz9nfyt66i7rjz7o8z">Mastodon</title>
        <path d="M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z"></path>
      </svg>
    </a>

    <a
      href="https://bsky.app/profile/dev.to"
      target="_blank"
      rel="noopener me"
      className="block"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 -3.268 64 68.414" width="24" height="24" role="img" aria-labelledby="a6qts3i3xjc8ejv6gl8gmvdnjldbinac">
        <title id="a6qts3i3xjc8ejv6gl8gmvdnjldbinac">Bluesky</title>
        <path fill="#0085ff" d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z"></path>
      </svg>
    </a>
  </div>
</aside>

      <aside className="p-4">
  <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
    <p className="font-bold text-lg mb-2">💎 DEV Diamond Sponsors</p>
    <p className="text-sm text-gray-700 mb-4">Thank you to our Diamond Sponsors for supporting the DEV Community</p>

    <div >
      <div className="bg-white p-4 rounded-lg shadow-md max-w-full w-full text-left text-sm italic text-gray-700">
        <a href="https://neon.tech/?ref=devto&amp;bb=228024" target="_blank" rel="noopener noreferrer">
          <img src="https://media2.dev.to/dynamic/image/width=880%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbnl88cil6afxzmgwrgtt.png" alt="Neon - Official Database Partner" className="w-full h-auto rounded-lg mb-4" loading="lazy" />
        </a>
        <p className="text-center">Neon is the official database partner of DEV</p>
      </div>
<br/>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-full w-full text-left text-sm italic text-gray-700">
        <a href="https://www.algolia.com/developers/?utm_source=devto&amp;utm_medium=referral&amp;bb=228024" target="_blank" rel="noopener noreferrer">
          <img src="https://media2.dev.to/dynamic/image/width=880%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv30ephnolfvnlwgwm0yz.png" alt="Algolia - Official Search Partner" className="w-full h-auto rounded-lg mb-4" loading="lazy" />
        </a>
        <p className="text-center">Algolia is the official search partner of DEV</p>
      </div>
    </div>
  </div>
</aside>

      <aside className="w-full lg:w-1/4 bg-gray-100 p-4 border-l">
        <div className="crayons-card crayons-card--secondary crayons-bb bb-placement js-billboard" data-display-unit="" data-id="461" data-category-click="click" data-category-impression="impression" data-context-type="article" data-special="nothing" data-article-id="" data-type-of="in_house" data-impression-recorded="true">
          <div className="crayons-bb__header relative">
            <div className="crayons-bb__title text-xl font-semibold text-gray-900">DEV Community</div>
            <div className="p-1 pt-3 text-styles text-styles--billboard">
                <img src="https://media2.dev.to/dynamic/image/width=350%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8nuyrw43yfedpbj2iieb.jpg?bb=461" alt="Billboard Banner" />
            </div>
          </div></div>
      </aside>

    </aside>
  );
};

export default Sidebar; 