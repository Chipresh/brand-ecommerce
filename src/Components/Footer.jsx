import React from 'react';
import flag from "../Assets/Navbar_assets/flag.png";

const Footer = () => {
        return (
          <>
            <footer style={{ fontFamily: "Inter" }} className="lg:h-[324px]  md:block">
              <div className="bg-[#fff] md:px-[5px] mx-20 py-[20px] lg:py-[77px] lg:flex justify-between items-center grid grid-cols-2 gap-[10px] lg:gap-0">
                <div className="flex flex-col gap-[10px]">
                  <svg
                    width="151"
                    height="46"
                    viewBox="0 0 151 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                      d="M50.2136 32.8061H59.103C63.7762 32.8061 66.2652 30.3679 66.2652 27.056C66.2652 23.9778 64.0607 22.1186 61.6936 22.0069V21.8037C63.8575 21.316 65.4525 19.782 65.4525 17.3336C65.4525 14.2147 63.1362 12 58.5442 12H50.2136V32.8061ZM54.6126 29.2098V23.6831H58.3004C60.4135 23.6831 61.7241 24.9022 61.7241 26.6192C61.7241 28.1837 60.6573 29.2098 58.1988 29.2098H54.6126ZM54.6126 20.7065V15.5557H57.955C59.9055 15.5557 61.0129 16.5615 61.0129 18.0651C61.0129 19.7109 59.6719 20.7065 57.8737 20.7065H54.6126Z"
                      fill="#8CB7F5"
                    />
                    <path
                      d="M68.5182 32.8061H72.846V23.9778C72.846 22.0577 74.248 20.737 76.1579 20.737C76.7573 20.737 77.5802 20.8385 77.9866 20.9706V17.1304C77.6005 17.039 77.0621 16.978 76.6253 16.978C74.8779 16.978 73.4454 17.994 72.8765 19.9242H72.7139V17.2015H68.5182V32.8061Z"
                      fill="#8CB7F5"
                    />
                    <path
                      d="M83.6988 33.1008C86.0049 33.1008 87.4983 32.095 88.2603 30.6422H88.3822V32.8061H92.4865V22.2812C92.4865 18.5629 89.3371 16.9984 85.8627 16.9984C82.1241 16.9984 79.6655 18.7864 79.0661 21.631L83.0689 21.9561C83.3635 20.9198 84.288 20.1579 85.8424 20.1579C87.3155 20.1579 88.1587 20.8995 88.1587 22.1796V22.2405C88.1587 23.2463 87.092 23.3784 84.3794 23.6425C81.291 23.927 78.5175 24.9632 78.5175 28.4478C78.5175 31.5362 80.7221 33.1008 83.6988 33.1008ZM84.9382 30.1139C83.6073 30.1139 82.6524 29.4942 82.6524 28.3056C82.6524 27.0865 83.6581 26.4871 85.182 26.2737C86.1268 26.1417 87.671 25.9182 88.1891 25.5728V27.2287C88.1891 28.8644 86.838 30.1139 84.9382 30.1139Z"
                      fill="#8CB7F5"
                    />
                    <path
                      d="M99.6438 23.7847C99.654 21.7732 100.853 20.5947 102.6 20.5947C104.337 20.5947 105.384 21.7326 105.374 23.6425V32.8061H109.701V22.8704C109.701 19.2334 107.568 16.9984 104.317 16.9984C102.001 16.9984 100.324 18.1362 99.6235 19.9547H99.4406V17.2015H95.316V32.8061H99.6438V23.7847Z"
                      fill="#8CB7F5"
                    />
                    <path
                      d="M118.334 33.0601C120.854 33.0601 122.164 31.6074 122.764 30.307H122.947V32.8061H127.214V12H122.896V19.8226H122.764C122.185 18.5527 120.935 16.9984 118.324 16.9984C114.901 16.9984 112.005 19.6601 112.005 25.0242C112.005 30.246 114.779 33.0601 118.334 33.0601ZM119.706 29.6161C117.583 29.6161 116.424 27.7265 116.424 25.0038C116.424 22.3015 117.562 20.4423 119.706 20.4423C121.809 20.4423 122.987 22.2202 122.987 25.0038C122.987 27.7875 121.789 29.6161 119.706 29.6161Z"
                      fill="#8CB7F5"
                    />
                    <g opacity="0.8">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.4673 2.91304H37.1847C40.9486 2.91304 43.9999 6.2855 43.9999 10.4456V35.5543C43.9999 39.7145 40.9486 43.087 37.1847 43.087H14.4673C10.7034 43.087 7.6521 39.7145 7.6521 35.5543L7.6521 10.4456C7.6521 6.2855 10.7034 2.91304 14.4673 2.91304Z"
                        fill="#0D6EFD"
                        fill-opacity="0.2"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.13046 2.91304H32.0435C36.0055 2.91304 39.2174 6.2855 39.2174 10.4456V35.5543C39.2174 39.7145 36.0055 43.087 32.0435 43.087H8.13046C4.16841 43.087 0.956542 39.7145 0.956543 35.5543L0.956543 10.4456C0.956543 6.2855 4.16841 2.91304 8.13046 2.91304Z"
                        fill="#0D6EFD"
                      />
                      <g opacity="0.7">
                        <path
                          opacity="0.3"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.2902 19.3563H14.3097C14.2592 19.3563 14.1842 19.4266 14.1813 19.473L13.459 31.1477L26.9549 31.1452L26.2254 19.473C26.2226 19.4284 26.1458 19.3563 26.097 19.3563H25.1165V21.3215C25.1165 21.8642 24.6765 22.3041 24.1338 22.3041C23.5912 22.3041 23.1512 21.8642 23.1512 21.3215V19.3563H17.2555V21.3215C17.2555 21.8642 16.8156 22.3041 16.2729 22.3041C15.7302 22.3041 15.2902 21.8642 15.2902 21.3215V19.3563Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.2033 12.4783C22.9153 12.4783 25.1164 14.6796 25.1164 17.3891L26.0969 17.3914C27.1835 17.3914 28.1192 18.2703 28.1867 19.3508L28.9244 31.1539C28.9921 32.2361 28.1698 33.1133 27.0865 33.1133H13.3201C12.2374 33.1133 11.4146 32.2344 11.4821 31.1539L12.2198 19.3508C12.2875 18.2686 13.2213 17.3914 14.3096 17.3914H15.2902C15.2902 14.6781 17.493 12.4783 20.2033 12.4783ZM23.1511 17.3915C23.1511 15.765 21.8299 14.4436 20.2033 14.4436C18.5778 14.4436 17.2554 15.7642 17.2554 17.3892L23.1511 17.3915ZM15.2902 19.3566H14.3096C14.2591 19.3566 14.1842 19.4269 14.1813 19.4733L13.4589 31.148L26.9548 31.1455L26.2253 19.4733C26.2225 19.4286 26.1457 19.3566 26.0969 19.3566H25.1164V21.3218C25.1164 21.8645 24.6765 22.3044 24.1338 22.3044C23.5911 22.3044 23.1512 21.8645 23.1512 21.3218V19.3566H17.2554V21.3218C17.2554 21.8645 16.8155 22.3044 16.2728 22.3044C15.7301 22.3044 15.2902 21.8645 15.2902 21.3218V19.3566Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </svg>
                  <p className="text-[#505050] text-[16px] not-italic font-[400] leading-[24px] tracking-[-0.2px] lg:w-[276px]">
                    Best information about the company gies here but now lorem ipsum
                    is
                  </p>
                  <div className="flex gap-[10px]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.8953 10.99L18.4834 10.9909C17.3762 10.9909 17.1616 11.5169 17.1616 12.2884V13.9909H19.8025L19.4584 16.6581H17.1616V23.5H14.4081V16.6581H12.1056V13.9909H14.4081V12.025C14.4081 9.74219 15.8022 8.5 17.8375 8.5C18.8125 8.5 19.6506 8.57219 19.8953 8.605V10.99ZM16 1C7.71625 1 1 7.71531 1 16C1 24.2837 7.71625 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
                        fill="#BDC4CD"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.9644 12.9409C21.97 13.0731 21.9738 13.2053 21.9738 13.3394C21.9738 17.4053 18.8781 22.0947 13.2175 22.0947C11.4794 22.0947 9.86219 21.5856 8.5 20.7128C8.74094 20.7409 8.98562 20.755 9.23406 20.755C10.6759 20.755 12.0025 20.2638 13.0562 19.4378C11.7091 19.4134 10.5728 18.5238 10.1809 17.3013C10.3694 17.3369 10.5616 17.3556 10.7603 17.3556C11.0406 17.3556 11.3125 17.3181 11.5712 17.2478C10.1631 16.9656 9.10281 15.7216 9.10281 14.2309C9.10281 14.2178 9.10281 14.2047 9.10281 14.1916C9.51719 14.4222 9.9925 14.5609 10.4969 14.5769C9.67094 14.0247 9.12719 13.0825 9.12719 12.0156C9.12719 11.4513 9.27906 10.9225 9.54437 10.4678C11.0622 12.3297 13.33 13.555 15.8875 13.6834C15.835 13.4584 15.8078 13.2231 15.8078 12.9822C15.8078 11.2825 17.1859 9.90438 18.8847 9.90438C19.7706 9.90438 20.5703 10.2784 21.1309 10.8766C21.8322 10.7388 22.4912 10.4828 23.0856 10.1303C22.8559 10.8484 22.3675 11.4513 21.7328 11.8328C22.3553 11.7578 22.9478 11.5928 23.5 11.3481C23.0875 11.965 22.5653 12.5069 21.9644 12.9409ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
                        fill="#BDC4CD"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.5 23.4859H20.3922V18.6222C20.3922 17.4625 20.3716 15.9709 18.7769 15.9709C17.1597 15.9709 16.9131 17.2347 16.9131 18.5397V23.4859H13.8081V13.4847H16.7875V14.8525H16.8306C17.245 14.0659 18.2594 13.2362 19.7716 13.2362C22.9187 13.2362 23.5 15.3072 23.5 18.0006V23.4859ZM10.3038 12.1187C9.30531 12.1187 8.5 11.3106 8.5 10.3159C8.5 9.32125 9.30531 8.51312 10.3038 8.51312C11.2975 8.51312 12.1047 9.32125 12.1047 10.3159C12.1047 11.3106 11.2975 12.1187 10.3038 12.1187ZM11.8581 23.4859H8.74656V13.4847H11.8581V23.4859ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
                        fill="#BDC4CD"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.0175 18.8948C17.6103 18.8948 18.9022 17.6067 18.9022 16.0167C18.9022 14.4276 17.6103 13.1395 16.0175 13.1395C14.4247 13.1395 13.1328 14.4276 13.1328 16.0167C13.1328 17.6067 14.4247 18.8948 16.0175 18.8948ZM19.3392 13.0694H21.367C21.5986 13.0694 21.787 12.8819 21.787 12.6512V10.6272C21.787 10.3966 21.5986 10.2091 21.367 10.2091H19.3392C19.1076 10.2091 18.9192 10.3966 18.9192 10.6272V12.6512C18.9192 12.8819 19.1076 13.0694 19.3392 13.0694ZM23.5 21.7206C23.5 22.7031 22.7022 23.5 21.7169 23.5H10.2831C9.29875 23.5 8.5 22.7031 8.5 21.7206V10.2784C8.5 9.29594 9.29875 8.5 10.2831 8.5H21.7169C22.7022 8.5 23.5 9.29594 23.5 10.2784V21.7206ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1ZM20.5804 16.0171C20.5804 18.5268 18.5339 20.5696 16.0176 20.5696C13.5014 20.5696 11.4548 18.5268 11.4548 16.0171C11.4548 15.6008 11.5111 15.1967 11.617 14.8133H10.2136V21.3364C10.2136 21.568 10.4011 21.7555 10.6326 21.7555H21.4017C21.6342 21.7555 21.8217 21.568 21.8217 21.3364V14.8133H20.4183C20.5242 15.1967 20.5804 15.6008 20.5804 16.0171Z"
                        fill="#BDC4CD"
                      />
                    </svg>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.5 16.5662C23.5 17.7803 23.35 18.9944 23.35 18.9944C23.35 18.9944 23.2038 20.0275 22.7537 20.4831C22.1838 21.0803 21.5444 21.0831 21.2509 21.1178C19.1519 21.2697 16 21.2744 16 21.2744C16 21.2744 12.1 21.2388 10.9 21.1244C10.5662 21.0616 9.81625 21.0803 9.24625 20.4831C8.79625 20.0275 8.65 18.9944 8.65 18.9944C8.65 18.9944 8.5 17.7803 8.5 16.5662V15.4281C8.5 14.2141 8.65 13.0009 8.65 13.0009C8.65 13.0009 8.79625 11.9669 9.24625 11.5113C9.81625 10.9141 10.4556 10.9113 10.7491 10.8766C12.8481 10.7247 15.9972 10.7247 15.9972 10.7247H16.0028C16.0028 10.7247 19.1519 10.7247 21.2509 10.8766C21.5444 10.9113 22.1838 10.9141 22.7537 11.5113C23.2038 11.9669 23.35 13.0009 23.35 13.0009C23.35 13.0009 23.5 14.2141 23.5 15.4281V16.5662ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1ZM14.4514 17.9453L18.5042 15.8453L14.4505 13.7303L14.4514 17.9453Z"
                        fill="#BDC4CD"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1 className="text-[#1C1C1C] text-[16px] not-italic font-[500] leading-[22px]">
                    About
                  </h1>
                  <ul className="text-[#8B96A5] text-[16px] not-italic font-[400] leading-[24px] tracking-[-0.2px]">
                    <li>About Us</li>
                    <li>Find store</li>
                    <li>Categories</li>
                    <li>Blogs</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[#1C1C1C] text-[16px] not-italic font-[500] leading-[22px]">
                    Partnership
                  </h1>
                  <ul className="text-[#8B96A5] text-[16px] not-italic font-[400] leading-[24px] tracking-[-0.2px]">
                    <li>About Us</li>
                    <li>Find store</li>
                    <li>Categories</li>
                    <li>Blogs</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[#1C1C1C] text-[16px] not-italic font-[500] leading-[22px]">
                    Information
                  </h1>
                  <ul className="text-[#8B96A5] text-[16px] not-italic font-[400] leading-[24px] tracking-[-0.2px]">
                    <li>Help Center</li>
                    <li>Money Refund</li>
                    <li>Shipping</li>
                    <li>Contact us</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-[#1C1C1C] text-[16px] not-italic font-[500] leading-[22px]">
                    For users
                  </h1>
                  <ul className="text-[#8B96A5] text-[16px] not-italic font-[400] leading-[24px] tracking-[-0.2px]">
                    <li>Login</li>
                    <li>Register</li>
                    <li>Settings</li>
                    <li>My Orders</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-[#1C1C1C] text-[16px] not-italic font-[500] leading-[22px]">
                    Get app
                  </h1>
                  <div className="md:flex md:flex-col gap-[10px] hidden">
                    <svg
                       xmlns="http://www.w3.org/2000/svg"
                      width="124"
                      height="35"
                      viewBox="0 0 124 42"
                      fill="none"
                     >
                      <rect width="100" height="42" rx="6" fill="#1C1C1C" />
                      <path
                        d="M24.9295 8.68966C25.0799 10.0467 24.5382 11.3839 23.7465 12.3669C22.9203 13.3345 21.5987 14.0746 20.3115 13.9793C20.143 12.6735 20.7952 11.285 21.5253 10.4379C22.3506 9.47654 23.7836 8.74002 24.9295 8.68966Z"
                        fill="white"
                      />
                      <path
                        d="M29.1433 16.5179C28.9997 16.603 26.6191 18.0136 26.6452 20.8903C26.6759 24.3643 29.7069 25.5127 29.7431 25.5244C29.725 25.6053 29.2685 27.1836 28.1316 28.7825C27.1823 30.1926 26.1877 31.5712 24.6079 31.5946C23.8566 31.6122 23.3494 31.3979 22.8208 31.1745C22.2697 30.9416 21.6954 30.6989 20.797 30.6989C19.8447 30.6989 19.2449 30.9496 18.6665 31.1914C18.1661 31.4006 17.6817 31.603 16.9989 31.6306C15.4942 31.6854 14.3447 30.127 13.361 28.7295C11.3944 25.8778 9.86354 20.6934 11.9162 17.1655C12.9108 15.4352 14.7243 14.321 16.6628 14.2913C17.5164 14.274 18.3351 14.6006 19.0529 14.8869C19.6017 15.1059 20.0915 15.3012 20.4927 15.3012C20.845 15.3012 21.3211 15.1137 21.8759 14.8951C22.7503 14.5505 23.8204 14.1289 24.9105 14.2428C25.656 14.2644 27.7775 14.535 29.1462 16.5162L29.1433 16.5179Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M40.0406 9.46417H37.9142V15.7451H40.0406C41.9215 15.7451 43.0264 14.583 43.0264 12.6025C43.0264 10.6263 41.9171 9.46417 40.0406 9.46417ZM38.7034 10.1693V15.04H39.988C41.4217 15.04 42.2197 14.1695 42.2197 12.6112C42.2197 11.0399 41.4261 10.1693 39.988 10.1693H38.7034Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M46.0747 15.8235C44.812 15.8235 43.9614 14.9225 43.9614 13.4817C43.9614 12.0366 44.812 11.14 46.0747 11.14C47.3331 11.14 48.1836 12.0366 48.1836 13.4817C48.1836 14.9225 47.3331 15.8235 46.0747 15.8235ZM47.4076 13.4817C47.4076 14.5481 46.8815 15.1575 46.0747 15.1575C45.268 15.1575 44.7375 14.5481 44.7375 13.4817C44.7375 12.4153 45.268 11.8059 46.0747 11.8059C46.8815 11.8059 47.4076 12.4153 47.4076 13.4817Z"
                        fill="white"
                      />
                      <path
                        d="M53.0033 15.7451H53.7793L55.0508 11.2183H54.2967L53.3847 14.9007H53.3672L52.3325 11.2183H51.5959L50.5656 14.9007H50.548L49.6361 11.2183H48.8775L50.1534 15.7451H50.9295L51.9554 12.2412H51.9729L53.0033 15.7451Z"
                        fill="white"
                      />
                      <path
                        d="M56.6918 11.2183H55.9727V15.7451H56.7356V13.0813C56.7356 12.3152 57.2047 11.8103 57.9238 11.8103C58.6253 11.8103 58.9717 12.2107 58.9717 12.942V15.7451H59.7345V12.8071C59.7345 11.7798 59.1558 11.14 58.1562 11.14C57.4503 11.14 56.9636 11.4534 56.7093 11.9409H56.6918V11.2183Z"
                        fill="white"
                      />
                      <path
                        d="M61.0423 9.46417V15.7451H61.8052V9.46417H61.0423Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M62.9112 13.4817C62.9112 14.9225 63.7618 15.8235 65.0245 15.8235C66.2828 15.8235 67.1334 14.9225 67.1334 13.4817C67.1334 12.0366 66.2828 11.14 65.0245 11.14C63.7618 11.14 62.9112 12.0366 62.9112 13.4817ZM65.0245 15.1575C65.8312 15.1575 66.3574 14.5481 66.3574 13.4817C66.3574 12.4153 65.8312 11.8059 65.0245 11.8059C64.2178 11.8059 63.6872 12.4153 63.6872 13.4817C63.6872 14.5481 64.2178 15.1575 65.0245 15.1575Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M69.5329 15.8235C68.6253 15.8235 68.0158 15.2794 68.0158 14.4654C68.0158 13.6907 68.6165 13.2032 69.6688 13.1422L70.9753 13.0682V12.6895C70.9753 12.1367 70.607 11.8059 69.9757 11.8059C69.3882 11.8059 69.0199 12.0802 68.9234 12.5241H68.1868C68.2394 11.7406 68.9146 11.14 69.9932 11.14C71.063 11.14 71.7382 11.7145 71.7382 12.6155V15.7451H71.0148V14.966H70.9972C70.7254 15.484 70.1467 15.8235 69.5329 15.8235ZM70.9753 14.0258C70.9753 14.6787 70.4229 15.1793 69.7038 15.1793C69.1558 15.1793 68.7919 14.8964 68.7919 14.4654C68.7919 14.0389 69.1426 13.769 69.7565 13.7298L70.9753 13.6558V14.0258Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M72.7829 13.4817C72.7829 14.9007 73.5721 15.8235 74.7339 15.8235C75.3916 15.8235 75.9133 15.5014 76.2071 14.9791H76.2203V15.7451H76.9481V9.46417H76.1852V11.9539H76.1676C75.8958 11.4577 75.3697 11.14 74.7164 11.14C73.5677 11.14 72.7829 12.0627 72.7829 13.4817ZM74.8786 11.8059C74.0719 11.8059 73.5633 12.4588 73.5633 13.4817C73.5633 14.509 74.0719 15.1575 74.8786 15.1575C75.6634 15.1575 76.1896 14.4959 76.1896 13.4817C76.1896 12.4719 75.6634 11.8059 74.8786 11.8059Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M82.3082 15.8235C81.0455 15.8235 80.1949 14.9225 80.1949 13.4817C80.1949 12.0366 81.0455 11.14 82.3082 11.14C83.5665 11.14 84.4171 12.0366 84.4171 13.4817C84.4171 14.9225 83.5665 15.8235 82.3082 15.8235ZM83.641 13.4817C83.641 14.5481 83.1149 15.1575 82.3082 15.1575C81.5014 15.1575 80.9709 14.5481 80.9709 13.4817C80.9709 12.4153 81.5014 11.8059 82.3082 11.8059C83.1149 11.8059 83.641 12.4153 83.641 13.4817Z"
                        fill="white"
                      />
                      <path
                        d="M86.2027 11.2183H85.4837V15.7451H86.2466V13.0813C86.2466 12.3152 86.7157 11.8103 87.4347 11.8103C88.1362 11.8103 88.4826 12.2107 88.4826 12.942V15.7451H89.2455V12.8071C89.2455 11.7798 88.6668 11.14 87.6671 11.14C86.9612 11.14 86.4745 11.4534 86.2203 11.9409H86.2027V11.2183Z"
                        fill="white"
                      />
                      <path
                        d="M93.6629 10.1258H92.9001V11.2183H92.2205V11.8408H92.9001V14.5699C92.9001 15.4405 93.2245 15.78 94.0619 15.78C94.2417 15.78 94.4521 15.7669 94.5442 15.7451V15.1096C94.4916 15.1184 94.3162 15.1314 94.2285 15.1314C93.8383 15.1314 93.6629 14.9442 93.6629 14.5307V11.8408H94.5486V11.2183H93.6629V10.1258Z"
                        fill="white"
                      />
                      <path
                        d="M95.6985 9.46417V15.7451H96.4614V13.1074C96.4614 12.3239 96.9305 11.8103 97.689 11.8103C98.4037 11.8103 98.7676 12.2412 98.7676 12.9594V15.7451H99.5305V12.8201C99.5305 11.8103 98.9254 11.14 97.9258 11.14C97.233 11.14 96.7332 11.436 96.4789 11.9409H96.4614V9.46417H95.6985Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M104.574 14.448H103.824C103.697 14.8746 103.272 15.1662 102.693 15.1662C101.873 15.1662 101.36 14.596 101.36 13.7298V13.6863H104.631V13.399C104.631 12.0279 103.872 11.14 102.64 11.14C101.382 11.14 100.575 12.0932 100.575 13.4991C100.575 14.9225 101.369 15.8235 102.675 15.8235C103.671 15.8235 104.442 15.2402 104.574 14.448ZM102.627 11.7972C101.912 11.7972 101.413 12.3413 101.364 13.0943H103.842C103.824 12.337 103.346 11.7972 102.627 11.7972Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.3021 31.1427L44.1972 27.9019H39.5936L38.4887 31.1427H36.5384L40.8993 19.1517H42.9249L47.2858 31.1427H45.3021ZM40.0707 26.4061L41.8703 21.1461H41.9205L43.7201 26.4061H40.0707Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M57.1021 26.7718C57.1021 24.0046 55.629 22.2596 53.3941 22.2596C52.1218 22.2596 51.109 22.8994 50.5901 23.9049H50.5566V22.4008H48.8072V34.0345H50.6152V29.7051H50.657C51.1593 30.6773 52.1637 31.2923 53.4276 31.2923C55.6373 31.2923 57.1021 29.5389 57.1021 26.7718ZM52.917 29.7716C54.3483 29.7716 55.2439 28.6082 55.2439 26.7718C55.2439 24.9436 54.3483 23.772 52.917 23.772C51.5359 23.772 50.6068 24.9686 50.6068 26.7718C50.6068 28.5916 51.5275 29.7716 52.917 29.7716Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M63.4867 22.2596C65.7215 22.2596 67.1947 24.0046 67.1947 26.7718C67.1947 29.5389 65.7299 31.2923 63.5201 31.2923C62.2562 31.2923 61.2518 30.6773 60.7496 29.7051H60.7077V34.0345H58.8998V22.4008H60.6491V23.9049H60.6826C61.2016 22.8994 62.2144 22.2596 63.4867 22.2596ZM65.3365 26.7718C65.3365 28.6082 64.4409 29.7716 63.0095 29.7716C61.6201 29.7716 60.6994 28.5916 60.6994 26.7718C60.6994 24.9686 61.6285 23.772 63.0095 23.772C64.4409 23.772 65.3365 24.9436 65.3365 26.7718Z"
                        fill="white"
                      />
                      <path
                        d="M74.4059 27.8022H72.556C72.6732 29.971 74.4812 31.3421 77.1597 31.3421C80.0223 31.3421 81.8219 29.9378 81.8219 27.6942C81.8219 25.9408 80.7924 24.9519 78.3148 24.3703L76.9839 24.0462C75.427 23.6639 74.7909 23.1653 74.7909 22.3178C74.7909 21.2541 75.7869 20.5228 77.2434 20.5228C78.6998 20.5228 79.6959 21.2458 79.8047 22.4424H81.6294C81.5708 20.3733 79.8214 18.9523 77.2685 18.9523C74.6904 18.9523 72.8741 20.3733 72.8741 22.4424C72.8741 24.1127 73.9036 25.1431 76.1218 25.6749L77.687 26.0488C79.2522 26.4311 79.9135 26.9878 79.9135 27.9185C79.9135 28.9905 78.817 29.7716 77.2936 29.7716C75.7032 29.7716 74.5398 28.9905 74.4059 27.8022Z"
                        fill="white"
                      />
                      <path
                        d="M86.0385 20.3317H84.2222V22.4008H82.9415V23.8218H84.2222V28.8409C84.2222 30.5278 84.9169 31.2009 86.6998 31.2009C87.1015 31.2009 87.5033 31.1676 87.7042 31.1178V29.6968C87.587 29.7217 87.2941 29.7383 87.1099 29.7383C86.3733 29.7383 86.0385 29.3976 86.0385 28.6415V23.8218H87.7126V22.4008H86.0385V20.3317Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M88.9996 26.7718C88.9996 29.5888 90.6569 31.3089 93.1764 31.3089C95.6958 31.3089 97.3531 29.5888 97.3531 26.7718C97.3531 23.9631 95.6874 22.243 93.1764 22.243C90.6653 22.243 88.9996 23.9631 88.9996 26.7718ZM93.1764 29.8298C94.5993 29.8298 95.5117 28.7162 95.5117 26.7718C95.5117 24.8356 94.5909 23.7221 93.1764 23.7221C91.7618 23.7221 90.8411 24.8356 90.8411 26.7718C90.8411 28.7162 91.7618 29.8298 93.1764 29.8298Z"
                        fill="white"
                      />
                      <path
                        d="M99.1591 22.4008H100.883V23.8883H100.925C101.218 22.8662 102.005 22.2596 103.043 22.2596C103.302 22.2596 103.528 22.3011 103.662 22.3261V23.9963C103.52 23.9381 103.202 23.8966 102.85 23.8966C101.687 23.8966 100.967 24.6694 100.967 25.9076V31.1427H99.1591V22.4008Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M111.026 28.5812H112.742C112.491 30.1767 110.968 31.3151 108.95 31.3151C106.364 31.3151 104.799 29.5784 104.799 26.8195C104.799 24.0773 106.389 22.2492 108.875 22.2492C111.319 22.2492 112.842 23.961 112.842 26.6118V27.2267H106.623V27.3347C106.623 28.8554 107.544 29.8609 108.992 29.8609C110.022 29.8609 110.783 29.3457 111.026 28.5812ZM106.623 26.0752L111.026 26.0338C111.026 25.6656 110.871 24.9828 110.506 24.6207C110.141 24.2586 109.604 23.9837 108.875 23.9837C107.406 23.9837 106.623 24.9579 106.623 26.0752Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="42"
                      viewBox="0 0 124 42"
                      fill="none"
                    >
                      <rect width="124" height="42" rx="6" fill="#1C1C1C" />
                      <path
                        d="M38.1176 11.1907H35.5789V11.9386H37.3795C37.2904 12.9874 36.4116 13.4347 35.582 13.4347C34.5206 13.4347 33.5944 12.6056 33.5944 11.4435C33.5944 10.3115 34.4773 9.43972 35.5842 9.43972C36.4385 9.43972 36.9417 9.98017 36.9417 9.98017L37.4692 9.43789C37.4692 9.43789 36.7921 8.68966 35.5573 8.68966C33.985 8.68966 32.7687 10.0071 32.7687 11.4301C32.7687 12.8246 33.9129 14.1841 35.5973 14.1841C37.0791 14.1841 38.1637 13.1767 38.1637 11.6866C38.1637 11.3723 38.1176 11.1907 38.1176 11.1907Z"
                        fill="white"
                      />
                      <path
                        d="M38.5959 23.2445H44.1744C44.1783 23.2602 44.2752 23.6573 44.2752 24.334C44.2752 27.6082 41.8921 29.8224 38.6364 29.8224C34.9347 29.8224 32.4205 26.8347 32.4205 23.7707C32.4205 20.6437 35.0934 17.7486 38.5484 17.7488C41.2617 17.7488 42.7494 19.3929 42.7494 19.3929L41.5903 20.5845C41.5903 20.5845 40.4844 19.3967 38.6076 19.3967C36.1751 19.3967 34.235 21.3124 34.235 23.7999C34.235 26.3533 36.2702 28.1752 38.6025 28.1752C40.4255 28.1752 42.3567 27.1924 42.5523 24.8879H38.5959V23.2445Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M44.9869 25.9031C44.9869 23.8309 46.6273 22.0543 48.9165 22.0543C50.798 22.0543 52.8385 23.378 52.8385 25.9482C52.8385 28.1906 51.0843 29.8153 48.9431 29.8153C46.5779 29.8153 44.9869 28.0057 44.9869 25.9031ZM51.1315 25.9379C51.1315 24.4821 50.0648 23.5785 48.9391 23.5785C47.6743 23.5785 46.7022 24.5824 46.7022 25.9266C46.7022 27.3003 47.6865 28.2922 48.9339 28.2922C50.0693 28.2922 51.1315 27.3628 51.1315 25.9379Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M57.5553 22.0543C55.2662 22.0543 53.6257 23.8309 53.6257 25.9031C53.6257 28.0057 55.2168 29.8153 57.5822 29.8153C59.7233 29.8153 61.4774 28.1906 61.4774 25.9482C61.4774 23.378 59.4371 22.0543 57.5553 22.0543ZM57.578 23.5785C58.7036 23.5785 59.7704 24.4821 59.7704 25.9379C59.7704 27.3628 58.7082 28.2922 57.5727 28.2922C56.3254 28.2922 55.3413 27.3003 55.3413 25.9266C55.3413 24.5824 56.3131 23.5785 57.578 23.5785Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M62.2644 25.9357C62.2644 23.8853 63.9161 22.0585 66.017 22.0585C66.9317 22.0585 67.6208 22.4099 68.1246 22.949V22.2917H69.7634V29.2647C69.7634 32.0043 68.1713 33.3103 66.0822 33.3103C64.1724 33.3103 63.0996 32.1446 62.5665 31.0253L64.0689 30.4018C64.277 30.9019 64.8759 31.7836 66.0698 31.7836C67.3057 31.7836 68.1245 30.9815 68.1245 29.6427V28.8775C67.6872 29.3814 67.0949 29.8205 65.9807 29.8205C64.1791 29.8205 62.2644 28.2716 62.2644 25.9357ZM66.169 23.5796C67.1992 23.5796 68.257 24.4528 68.257 25.944C68.257 27.4598 67.2014 28.2951 66.1463 28.2951C65.0264 28.2951 63.984 27.3922 63.984 25.9584C63.984 24.4687 65.0665 23.5796 66.169 23.5796Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M73.7488 25.9245C73.7488 23.6146 75.4128 22.0491 77.3947 22.0491C78.9578 22.0491 80.1389 23.0841 80.6452 24.3232L80.9174 24.9559L75.6761 27.1149C75.9892 27.6935 76.4946 28.2909 77.5933 28.2911C78.5715 28.2911 79.1578 27.7631 79.5085 27.2227L80.8596 28.1153C80.2538 28.9202 79.2388 29.8183 77.585 29.8183C75.6035 29.8183 73.7488 28.3687 73.7488 25.9245ZM77.4631 23.5416C78.1772 23.5416 78.6911 23.9185 78.9094 24.3705L75.4092 25.8228C75.2584 24.6984 76.3316 23.5416 77.4631 23.5416Z"
                        fill="white"
                      />
                      <path
                        d="M72.7993 29.5879H71.0777V18.1501H72.7993V29.5879Z"
                        fill="white"
                      />
                      <path
                        d="M94.1598 29.5879H95.8814V18.1501H94.1598V29.5879Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M86.7519 29.5879H85.0303V18.1501L89.1948 18.15C91.2135 18.15 92.8651 19.7896 92.8651 21.7937C92.8651 23.7977 91.2135 25.4374 89.1948 25.4374H86.7519V29.5879ZM86.7519 23.7282V19.8591H89.1947C90.2633 19.8591 91.1436 20.7329 91.1436 21.7937C91.1436 22.8544 90.2633 23.7282 89.1947 23.7282H86.7519Z"
                        fill="white"
                      />
                      <path
                        d="M108.592 33.3103L113.577 22.0493H111.697L109.441 27.1452L107.185 22.0493H105.305L108.501 29.2692L106.712 33.3103H108.592Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M102.927 29.5879H104.649V25.4742C104.918 21.2314 99.5001 20.2336 97.45 23.2922L98.8354 24.215C99.8378 22.4751 102.698 22.8755 102.886 24.7401C102.027 24.514 101.098 24.3501 100.249 24.4354C98.9249 24.5684 97.7909 25.4035 97.6107 26.7712C97.5133 27.5103 97.6795 28.4213 98.1992 28.9765C99.0092 29.8416 100.339 29.9581 101.431 29.6626C102.046 29.4961 102.531 29.1333 102.927 28.6647V29.5879ZM101.022 28.1717C101.964 27.9169 102.707 27.2327 102.927 26.2816C102.446 26.1267 102.002 26.0017 101.495 25.9409C98.5361 25.4993 99.0314 28.7104 101.022 28.1717Z"
                        fill="white"
                      />
                      <path
                        d="M49.2774 14.0776H48.494V8.87233H49.2774V14.0776Z"
                        fill="white"
                      />
                      <path
                        d="M44.1063 14.0776H44.8899V9.65007H46.1759V8.87233H42.8203V9.65007H44.1063V14.0776Z"
                        fill="white"
                      />
                      <path
                        d="M41.9942 14.0776H38.9896V8.87233H41.9942V9.65007H39.7731V11.0861H41.7268V11.8638H39.7731V13.2997H41.9942V14.0776Z"
                        fill="white"
                      />
                      <path
                        d="M51.9847 14.0776V9.65007H53.2707V8.87233H49.9152V9.65007H51.2013V14.0776H51.9847Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M55.2866 11.4301C55.2866 10.007 56.503 8.68966 58.0754 8.68966C59.6477 8.68966 60.8641 10.007 60.8641 11.4301C60.8641 12.8134 59.738 14.1623 58.0754 14.1837C56.4127 14.1623 55.2866 12.8134 55.2866 11.4301ZM58.0754 13.4343C57.0243 13.4215 56.1124 12.5966 56.1124 11.4435C56.1124 10.3208 56.9811 9.45399 58.0754 9.43997C59.1698 9.45399 60.0383 10.3208 60.0383 11.4435C60.0383 12.5966 59.1264 13.4215 58.0754 13.4343Z"
                        fill="white"
                      />
                      <path
                        d="M62.4302 14.0776H61.6467V8.87233H62.4302L64.9452 12.6619V8.87233H65.7287V14.0776H64.9465L62.4302 10.286V14.0776Z"
                        fill="white"
                      />
                      <path
                        d="M11.376 15.1822L20.2282 23.9572L11.4185 32.8092C11.1614 32.647 11.0236 32.2958 11.0213 31.8422L10.9414 16.1313C10.939 15.6345 11.121 15.3315 11.376 15.1822Z"
                        fill="white"
                      />
                      <path
                        d="M12.383 15.1941L23.1472 21.0243L20.5943 23.5892L12.0074 15.0769C12.1374 15.0938 12.268 15.1318 12.383 15.1941Z"
                        fill="white"
                      />
                      <path
                        d="M23.6259 26.5944L20.9631 23.9547L23.6232 21.2821L27.2865 23.2659C28.1889 23.7544 27.7273 24.3656 27.2865 24.6051L23.6259 26.5944Z"
                        fill="white"
                      />
                      <path
                        d="M12.383 32.7031C12.3017 32.7482 12.2233 32.7836 12.1482 32.8116L20.5969 24.3227L23.1494 26.853L12.383 32.7031Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lg:h-[68px]  bg-[#EFF2F4] border-[1px] border-t-[#DEE2E7] px-[50px]  flex   justify-between  items-center ">
                <div className="text-[#606060] text-[16px] not-italic font-[400] leading-[24px] tracking-[0.2px] ">
                  <p>&copy; 2023 Ecommerce. </p>
                </div>
                <div className="md:flex items-center gap-[px] hidden">
                  <img src={flag} alt="flag_img" />
                  <p className='text-[10px] '>English</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8.29488L6 14.2949L7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29488Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </div>
              </div>
            </footer>
          </>
      
  )
}

export default Footer