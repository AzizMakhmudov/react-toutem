import React from "react";
import "../all/all.css";
import "./Header.css";
import '../all/normalize.css'

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-box">
          <h1>
            <a href="/">
              <svg
                width={75}
                height={24}
                viewBox="0 0 75 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_1)">
                  <path
                    fillRule="evenodd"
                    clipRule={"evenodd"}
                    d="M17.262 10.0581L12.4513 18.8401C14.3523 22.2078 15.9036 23.3903 18.9512 23.27C21.9358 23.1521 25.3719 19.0921 23.4369 15.6179L18.619 7.0753C18.4467 7.65027 17.4396 9.68849 17.2619 10.0581L17.262 10.0581ZM10.1434 20.6543C4.8786 27.3598 -2.71675 19.959 0.977333 14.1981C0.977333 14.1981 4.90991 7.3063 6.43925 4.62135C7.62519 2.53926 8.95382 1.22901 10.6813 0.809006C12.7879 0.29685 15.2547 1.4106 16.5697 3.44183C17.4837 4.85338 18.2925 6.1454 16.8671 8.5858C16.6977 8.87568 10.4768 20.2296 10.1434 20.6542V20.6543ZM10.5191 8.2514C9.08019 7.4219 9.08019 5.33685 10.5191 4.50735C11.9579 3.67785 13.7662 4.72035 13.7662 6.37935C13.7662 8.03835 11.9579 9.0809 10.5191 8.2514Z"
                    fill="#5FD788"
                  />
                </g>
                <path
                  d="M38.8125 16H40.3184V8.81641H42.8438V7.54492H36.2812V8.81641H38.8125V16ZM45.0293 16.123C46.8516 16.123 48.0352 14.9102 48.0352 12.8945V12.8828C48.0352 10.8789 46.834 9.66016 45.0234 9.66016C43.2188 9.66016 42.0234 10.8906 42.0234 12.8828V12.8945C42.0234 14.9043 43.2012 16.123 45.0293 16.123ZM45.0352 14.9453C44.1035 14.9453 43.5117 14.2012 43.5117 12.8945V12.8828C43.5117 11.5938 44.1152 10.8438 45.0234 10.8438C45.9492 10.8438 46.5469 11.5879 46.5469 12.8828V12.8945C46.5469 14.1953 45.9551 14.9453 45.0352 14.9453ZM51.0879 16.123C52.0254 16.123 52.6641 15.6895 52.9863 15.0273H53.0156V16H54.4746V9.78906H53.0156V13.3867C53.0156 14.2891 52.4824 14.8926 51.6445 14.8926C50.8125 14.8926 50.4023 14.3945 50.4023 13.5156V9.78906H48.9434V13.8027C48.9434 15.2441 49.7227 16.123 51.0879 16.123ZM57.9844 16.123C58.2773 16.123 58.5352 16.0938 58.7051 16.0703V14.9746C58.6055 14.9805 58.4941 14.998 58.3535 14.998C57.8203 14.998 57.5508 14.8047 57.5508 14.1953V10.9141H58.7051V9.78906H57.5508V8.21289H56.0684V9.78906H55.1895V10.9141H56.0684V14.3184C56.0684 15.5957 56.6836 16.123 57.9844 16.123ZM62.3203 16.123C63.9434 16.123 64.8574 15.1621 65.0508 14.207L65.0684 14.1426H63.7031L63.6914 14.1836C63.5508 14.5996 63.0762 14.9863 62.3496 14.9863C61.4004 14.9863 60.8027 14.3418 60.7793 13.252H65.127V12.7832C65.127 10.9082 64.0254 9.66016 62.25 9.66016C60.4746 9.66016 59.332 10.9492 59.332 12.9062V12.9121C59.332 14.8867 60.457 16.123 62.3203 16.123ZM62.2676 10.8027C63.041 10.8027 63.6035 11.2949 63.709 12.2793H60.7969C60.9141 11.3242 61.4941 10.8027 62.2676 10.8027ZM66.0703 16H67.5293V12.1973C67.5293 11.4414 68.0215 10.8906 68.7246 10.8906C69.4043 10.8906 69.8262 11.3242 69.8262 12.0215V16H71.2441V12.1621C71.2441 11.4121 71.7246 10.8906 72.4277 10.8906C73.1426 10.8906 73.541 11.3301 73.541 12.0977V16H75V11.7344C75 10.4922 74.1973 9.66016 72.9727 9.66016C72.0762 9.66016 71.3379 10.1406 71.0391 10.9141H71.0039C70.7754 10.1172 70.1484 9.66016 69.2812 9.66016C68.4609 9.66016 67.8223 10.1055 67.5586 10.7852H67.5293V9.78906H66.0703V16Z"
                  fill="#1F2937"
                />
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect width={24} height={24} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </h1>
          <div className="header__link--box">
            <nav>
              <ul className="ul-list">
                <li>
                  <a className="link-header" href="#">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="link-header" href="#">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a className="link-header" href="#">
                    SHOP
                  </a>
                </li>
                <li>
                  <a className="link-header" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
            <a href="#">
              <svg
                className="market-search"
                width={42}
                height={17}
                viewBox="0 0 42 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0493 14.6919L13.4942 4.84063H10.7214V4.04532C10.7214 2.0617 9.07272 0.448059 7.04616 0.448059C5.0196 0.448059 3.37096 2.06178 3.37096 4.04532V4.84063H0.478081L0.000561102 14.7345L7.77038e-05 14.7516C-0.0038423 15.1076 0.140719 15.4571 0.396479 15.7099C0.652319 15.9631 1.00776 16.1084 1.37168 16.1084H12.6798C13.0548 16.1084 13.418 15.9555 13.676 15.6887C13.9339 15.4219 14.07 15.0586 14.0493 14.6919ZM4.32952 4.04532C4.32952 2.57912 5.54816 1.38627 7.04616 1.38627C8.54408 1.38627 9.7628 2.57912 9.7628 4.04532V4.84063H4.32944L4.32952 4.04532ZM12.9798 15.0437C12.9019 15.124 12.7926 15.1701 12.6797 15.1701H1.3716C1.262 15.1701 1.15504 15.1264 1.07784 15.05C1.00248 14.9756 0.959201 14.8733 0.958481 14.7684L1.39232 5.77884H3.3708V6.96692C3.3708 7.22602 3.58536 7.43602 3.85008 7.43602C4.1148 7.43602 4.32936 7.22602 4.32936 6.96692V5.77884H9.76272V6.96692C9.76272 7.22602 9.97728 7.43602 10.242 7.43602C10.5067 7.43602 10.7212 7.22602 10.7212 6.96692V5.77884H12.5869L13.0919 14.7436C13.0984 14.854 13.0574 14.9634 12.9798 15.0437Z"
                  fill="black"
                />
                <path
                  d="M38.4439 12.0126L41.8698 15.3658C42.0434 15.5357 42.0434 15.8111 41.8698 15.981C41.6963 16.1509 41.4149 16.1509 41.2413 15.981L37.8154 12.6278C36.5617 13.7111 34.9149 14.3684 33.1111 14.3684C29.1838 14.3684 26 11.2522 26 7.40822C26 3.56423 29.1838 0.448059 33.1111 0.448059C37.0385 0.448059 40.2222 3.56423 40.2222 7.40822C40.2222 9.17367 39.5507 10.7856 38.4439 12.0126ZM33.1111 13.4984C36.5475 13.4984 39.3333 10.7717 39.3333 7.40822C39.3333 4.04473 36.5475 1.31808 33.1111 1.31808C29.6747 1.31808 26.8889 4.04473 26.8889 7.40822C26.8889 10.7717 29.6747 13.4984 33.1111 13.4984Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
