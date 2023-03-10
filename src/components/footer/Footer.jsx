import React from "react";
import "../all/all.css";
import "./Footer.css";
import "../all/normalize.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-logobox">
            <h1>
              <a href="/">
                <svg
                  className="footer-logo"
                  width={102}
                  height={24}
                  viewBox="0 0 102 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_104_475)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.262 10.0581L12.4513 18.8401C14.3523 22.2078 15.9036 23.3903 18.9512 23.2699C21.9358 23.1521 25.3719 19.0921 23.4369 15.6179L18.619 7.07527C18.4467 7.65024 17.4396 9.68846 17.2619 10.0581L17.262 10.0581ZM10.1434 20.6543C4.8786 27.3598 -2.71675 19.959 0.977333 14.198C0.977333 14.198 4.90991 7.30627 6.43925 4.62132C7.62519 2.53922 8.95382 1.22898 10.6813 0.808975C12.7879 0.296819 15.2547 1.41057 16.5697 3.4418C17.4837 4.85335 18.2925 6.14537 16.8671 8.58577C16.6977 8.87565 10.4768 20.2296 10.1434 20.6542V20.6543ZM10.5191 8.25137C9.08019 7.42186 9.08019 5.33682 10.5191 4.50732C11.9579 3.67782 13.7662 4.72032 13.7662 6.37932C13.7662 8.03832 11.9579 9.08086 10.5191 8.25137Z"
                      fill="#5FD788"
                    />
                  </g>
                  <path
                    d="M38.8125 16H40.3184V8.81641H42.8438V7.54492H36.2812V8.81641H38.8125V16ZM45.0293 16.123C46.8516 16.123 48.0352 14.9102 48.0352 12.8945V12.8828C48.0352 10.8789 46.834 9.66016 45.0234 9.66016C43.2188 9.66016 42.0234 10.8906 42.0234 12.8828V12.8945C42.0234 14.9043 43.2012 16.123 45.0293 16.123ZM45.0352 14.9453C44.1035 14.9453 43.5117 14.2012 43.5117 12.8945V12.8828C43.5117 11.5938 44.1152 10.8438 45.0234 10.8438C45.9492 10.8438 46.5469 11.5879 46.5469 12.8828V12.8945C46.5469 14.1953 45.9551 14.9453 45.0352 14.9453ZM51.0879 16.123C52.0254 16.123 52.6641 15.6895 52.9863 15.0273H53.0156V16H54.4746V9.78906H53.0156V13.3867C53.0156 14.2891 52.4824 14.8926 51.6445 14.8926C50.8125 14.8926 50.4023 14.3945 50.4023 13.5156V9.78906H48.9434V13.8027C48.9434 15.2441 49.7227 16.123 51.0879 16.123ZM57.9844 16.123C58.2773 16.123 58.5352 16.0938 58.7051 16.0703V14.9746C58.6055 14.9805 58.4941 14.998 58.3535 14.998C57.8203 14.998 57.5508 14.8047 57.5508 14.1953V10.9141H58.7051V9.78906H57.5508V8.21289H56.0684V9.78906H55.1895V10.9141H56.0684V14.3184C56.0684 15.5957 56.6836 16.123 57.9844 16.123ZM62.3203 16.123C63.9434 16.123 64.8574 15.1621 65.0508 14.207L65.0684 14.1426H63.7031L63.6914 14.1836C63.5508 14.5996 63.0762 14.9863 62.3496 14.9863C61.4004 14.9863 60.8027 14.3418 60.7793 13.252H65.127V12.7832C65.127 10.9082 64.0254 9.66016 62.25 9.66016C60.4746 9.66016 59.332 10.9492 59.332 12.9062V12.9121C59.332 14.8867 60.457 16.123 62.3203 16.123ZM62.2676 10.8027C63.041 10.8027 63.6035 11.2949 63.709 12.2793H60.7969C60.9141 11.3242 61.4941 10.8027 62.2676 10.8027ZM66.0703 16H67.5293V12.1973C67.5293 11.4414 68.0215 10.8906 68.7246 10.8906C69.4043 10.8906 69.8262 11.3242 69.8262 12.0215V16H71.2441V12.1621C71.2441 11.4121 71.7246 10.8906 72.4277 10.8906C73.1426 10.8906 73.541 11.3301 73.541 12.0977V16H75V11.7344C75 10.4922 74.1973 9.66016 72.9727 9.66016C72.0762 9.66016 71.3379 10.1406 71.0391 10.9141H71.0039C70.7754 10.1172 70.1484 9.66016 69.2812 9.66016C68.4609 9.66016 67.8223 10.1055 67.5586 10.7852H67.5293V9.78906H66.0703V16Z"
                    fill="#1F2937"
                  />
                  <defs>
                    <clipPath id="clip0_104_475">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </h1>
            <div className="three-boxes__footer">
              <div className="navigation-footer__first-box">
                <a className="navigation-title__footer" href="#">
                  Customer Support
                </a>
                <ul>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Free Return
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Track your Order
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navigation-footer__box">
                <a className="navigation-title__footer" href="#">
                  {" "}
                  About Us{" "}
                </a>
                <ul>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Our Values
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Brand Ambassadors
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Fitness Professionals
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navigation-footer__last-box">
                <a className="navigation-title__footer" href="#">
                  Customer Service
                </a>
                <ul>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Help
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Leader Support
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Pleasant Grove Product Center
                    </a>
                  </li>
                  <li>
                    <a className="navigation-info__footer" href="#">
                      Recall???Important Safety Information
                    </a>
                  </li>
                </ul>
                <p className="last-content__footer">
                  copyright ?? 2022 Toutem all rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
