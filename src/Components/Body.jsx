import React from 'react'

const Body = () => {
  return (
    <>
        <div
        style={{ fontFamily: "Inter" }}
        className="md:flex justify-center h-[190px] bg-[#eff2f4] items-center  hidden"
      >
        <div className="flex flex-col gap-[10px] lg:gap-[21px] items-center">
          <div className="lg:flex lg:flex-col text-center tracking-[0.2px]">
            <h1 className="text-[#1C1C1C] text-[20px] not-italic font-[600] leading-[28px]">
              Subscribe on our newsletter
            </h1>
            <p className="text-[#606060] text-[16px] not-italic font-[400] leading-[24px]">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[20px] text-[16px] not-italic font-[500] leading-[normal]">
            <div className="bg-[#ffffff] flex items-center h-[40px] w-[274px] text-[#8B96A5] p-[10px]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1666 5.50001C20.1666 4.49167 19.3416 3.66667 18.3333 3.66667H3.66659C2.65825 3.66667 1.83325 4.49167 1.83325 5.50001V16.5C1.83325 17.5083 2.65825 18.3333 3.66659 18.3333H18.3333C19.3416 18.3333 20.1666 17.5083 20.1666 16.5V5.50001ZM18.3333 5.50001L10.9999 10.0833L3.66659 5.50001H18.3333ZM18.3333 16.5H3.66659V7.33334L10.9999 11.9167L18.3333 7.33334V16.5Z"
                  fill="#8B96A5"
                />
              </svg>
              <input type="email" placeholder="Email" className="no-border" />
            </div>
            <div className="flex justify-center">
              <button className="text-[#fff] h-[40px] px-[16px] rounded-[6px] bg-[#127FFF] flex items-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Body