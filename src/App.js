import { useState } from "react";
import './fonts/Bankgothic/bank gothic light bt.ttf'

const App = () => {
   const [open, setOpen] = useState(false);
   const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
   ];
  return (
    <div className="2xl:w-[1691px] 2xl:h-[2042px] md:flex md:w-800 lg:w-1300 relative overflow-hidden bg-black">
  <div className="w-[55px] h-[5516px]">
    <div className="w-[55px] h-[5516px] absolute left-[-0.5px] top-[-0.5px] bg-black border border-[#1e1e1e]" />
    <svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[35px] h-[35px] absolute left-[11px] top-[22px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M29.2396 16.0417H5.76042C4.99527 16.0417 4.375 16.6619 4.375 17.4271V17.5729C4.375 18.3381 4.99527 18.9583 5.76042 18.9583H29.2396C30.0047 18.9583 30.625 18.3381 30.625 17.5729V17.4271C30.625 16.6619 30.0047 16.0417 29.2396 16.0417Z"
        fill="#F8F8F8"
      />
      <path
        d="M29.2396 23.3333H5.76042C4.99527 23.3333 4.375 23.9536 4.375 24.7187V24.8646C4.375 25.6297 4.99527 26.25 5.76042 26.25H29.2396C30.0047 26.25 30.625 25.6297 30.625 24.8646V24.7187C30.625 23.9536 30.0047 23.3333 29.2396 23.3333Z"
        fill="#F8F8F8"
      />
      <path
        d="M29.2396 8.75H5.76042C4.99527 8.75 4.375 9.37027 4.375 10.1354V10.2812C4.375 11.0464 4.99527 11.6667 5.76042 11.6667H29.2396C30.0047 11.6667 30.625 11.0464 30.625 10.2812V10.1354C30.625 9.37027 30.0047 8.75 29.2396 8.75Z"
        fill="#F8F8F8"
      />
    </svg>
    <img
      src="read-online.png"
      className="w-[30px] h-[30px] absolute left-[12.5px] top-[231.5px] object-contain"
    />
    <img
      src="search.png"
      className="w-[30px] h-[30px] absolute left-[11.5px] top-[90.5px] object-contain"
    />
    <img
      src="comet.png"
      className="w-[30px] h-[30px] absolute left-[13.5px] top-[387.5px] object-contain"
    />
    <img
      src="tv-show.png"
      className="w-[30px] h-[30px] absolute left-[13.5px] top-[160.5px] object-contain"
    />
    <img
      src="event-accepted.png"
      className="w-[30px] h-[30px] absolute left-[13.5px] top-[311.5px] object-contain"
    />
    <img
      src="user-groups.png"
      className="w-[30px] h-[30px] absolute left-[13.5px] top-[474.5px] object-contain"
    />
  </div>
  <div className="w-[1224px] h-[79px]">
    <div className="w-[1224px] h-[79px] absolute left-[55.5px] top-[-1.5px] bg-black border border-[#1e1e1e]" />
    <img
      src="frame-2-(1)-1.png"
      className="w-[170px] h-[60.22px] absolute left-[65.5px] top-[7.5px] object-cover"
    />
    <div className="w-[151px] h-8 absolute left-[283.5px] top-[23.5px] rounded-[25px] bg-transparent border border-[#9e00ff]" />
    <p className="w-[184px] h-[19px] absolute left-[329px] top-7 text-lg font-semibold text-left text-[#9e00ff]">
      Community
    </p>
    <img
      src="youtube.png"
      className="w-9 h-9 absolute left-[1149.5px] top-[19.5px] object-contain"
    />
    <img
      src="facebook.png"
      className="w-[35px] h-[35px] absolute left-[1211.5px] top-[19.5px] object-contain"
    />
    <img
      src="discord-new.png"
      className="w-[30px] h-[30px] absolute left-[293.5px] top-[24.5px] object-contain"
    />
    <svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[29px] h-[29px] absolute left-[1095px] top-6"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.81188 0.07975C9.22925 0.0145 9.68117 0 13.2917 0C16.9022 0 17.3541 0.0157083 18.7703 0.07975C20.1864 0.143792 21.1531 0.36975 21.9989 0.697208C22.8846 1.03192 23.6882 1.55512 24.3528 2.23179C25.0294 2.89517 25.5514 3.6975 25.8849 4.58442C26.2136 5.43025 26.4383 6.39692 26.5036 7.81067C26.5688 9.23046 26.5833 9.68237 26.5833 13.2917C26.5833 16.9022 26.5676 17.3541 26.5036 18.7715C26.4395 20.1852 26.2136 21.1519 25.8849 21.9977C25.5514 22.8847 25.0285 23.6884 24.3528 24.3528C23.6882 25.0294 22.8846 25.5514 21.9989 25.8849C21.1531 26.2136 20.1864 26.4383 18.7727 26.5036C17.3541 26.5688 16.9022 26.5833 13.2917 26.5833C9.68117 26.5833 9.22925 26.5676 7.81188 26.5036C6.39813 26.4395 5.43146 26.2136 4.58563 25.8849C3.69861 25.5514 2.89495 25.0285 2.23058 24.3528C1.55438 23.689 1.03109 22.8857 0.697208 21.9989C0.36975 21.1531 0.145 20.1864 0.07975 18.7727C0.0145 17.3529 0 16.901 0 13.2917C0 9.68117 0.0157083 9.22925 0.07975 7.81308C0.143792 6.39692 0.36975 5.43025 0.697208 4.58442C1.03158 3.6976 1.55527 2.89434 2.23179 2.23058C2.89522 1.55452 3.69807 1.03124 4.58442 0.697208C5.43025 0.36975 6.39692 0.145 7.81067 0.07975H7.81188ZM18.6627 2.47225C17.261 2.40821 16.8405 2.39492 13.2917 2.39492C9.74279 2.39492 9.32229 2.40821 7.92063 2.47225C6.62408 2.53146 5.92083 2.74775 5.452 2.93021C4.83213 3.17188 4.38867 3.45825 3.92346 3.92346C3.48247 4.35248 3.14309 4.87476 2.93021 5.452C2.74775 5.92083 2.53146 6.62408 2.47225 7.92063C2.40821 9.32229 2.39492 9.74279 2.39492 13.2917C2.39492 16.8405 2.40821 17.261 2.47225 18.6627C2.53146 19.9592 2.74775 20.6625 2.93021 21.1313C3.14288 21.7077 3.48242 22.2309 3.92346 22.6599C4.35242 23.1009 4.87563 23.4405 5.452 23.6531C5.92083 23.8356 6.62408 24.0519 7.92063 24.1111C9.32229 24.1751 9.74158 24.1884 13.2917 24.1884C16.8418 24.1884 17.261 24.1751 18.6627 24.1111C19.9592 24.0519 20.6625 23.8356 21.1313 23.6531C21.7512 23.4115 22.1947 23.1251 22.6599 22.6599C23.1009 22.2309 23.4405 21.7077 23.6531 21.1313C23.8356 20.6625 24.0519 19.9592 24.1111 18.6627C24.1751 17.261 24.1884 16.8405 24.1884 13.2917C24.1884 9.74279 24.1751 9.32229 24.1111 7.92063C24.0519 6.62408 23.8356 5.92083 23.6531 5.452C23.4115 4.83213 23.1251 4.38867 22.6599 3.92346C22.2308 3.4825 21.7086 3.14313 21.1313 2.93021C20.6625 2.74775 19.9592 2.53146 18.6627 2.47225ZM11.594 17.3891C12.5421 17.7838 13.5978 17.8371 14.5809 17.5398C15.5639 17.2426 16.4133 16.6133 16.9839 15.7594C17.5545 14.9055 17.8109 13.88 17.7094 12.858C17.6079 11.836 17.1547 10.881 16.4273 10.156C15.9636 9.69262 15.4029 9.33777 14.7856 9.11705C14.1683 8.89633 13.5097 8.81523 12.8573 8.87958C12.2048 8.94393 11.5748 9.15213 11.0125 9.4892C10.4502 9.82627 9.96965 10.2838 9.60541 10.8289C9.24117 11.374 9.00231 11.9931 8.90604 12.6415C8.80977 13.29 8.85847 13.9518 9.04865 14.5792C9.23883 15.2066 9.56575 15.784 10.0059 16.2699C10.446 16.7558 10.9884 17.138 11.594 17.3891ZM8.46075 8.46075C9.09516 7.82635 9.8483 7.32311 10.6772 6.97977C11.5061 6.63643 12.3945 6.45972 13.2917 6.45972C14.1889 6.45972 15.0773 6.63643 15.9061 6.97977C16.735 7.32311 17.4882 7.82635 18.1226 8.46075C18.757 9.09516 19.2602 9.8483 19.6036 10.6772C19.9469 11.5061 20.1236 12.3945 20.1236 13.2917C20.1236 14.1889 19.9469 15.0773 19.6036 15.9061C19.2602 16.735 18.757 17.4882 18.1226 18.1226C16.8413 19.4038 15.1036 20.1236 13.2917 20.1236C11.4797 20.1236 9.74199 19.4038 8.46075 18.1226C7.17951 16.8413 6.45972 15.1036 6.45972 13.2917C6.45972 11.4797 7.17951 9.74199 8.46075 8.46075ZM21.6388 7.47717C21.796 7.32887 21.9219 7.15053 22.009 6.95272C22.096 6.75491 22.1425 6.54164 22.1456 6.32554C22.1488 6.10944 22.1085 5.89491 22.0273 5.69465C21.946 5.49438 21.8254 5.31245 21.6726 5.15963C21.5198 5.00681 21.3379 4.88621 21.1376 4.80496C20.9373 4.72371 20.7228 4.68347 20.5067 4.68662C20.2906 4.68977 20.0773 4.73625 19.8795 4.8233C19.6817 4.91035 19.5034 5.03621 19.3551 5.19342C19.0667 5.49916 18.9088 5.90527 18.9149 6.32554C18.921 6.74581 19.0907 7.14715 19.3879 7.44435C19.6851 7.74156 20.0864 7.91123 20.5067 7.91736C20.927 7.92349 21.3331 7.76558 21.6388 7.47717Z"
        fill="#F2F2F2"
      />
    </svg>
    <div className="w-[115px] h-8 absolute left-[940.5px] top-[23.5px] rounded-[25px] bg-transparent border border-white" />
    <p className="absolute left-[959px] top-7 text-[19px] font-semibold text-left text-white">
      Connect
    </p>
  </div>
  <div className="w-[726px] h-[409.15px]">
    <div className="w-[724.55px] h-[407.24px]">
      <div className="w-[724.55px] h-[407.24px] absolute left-[84.5px] top-[284.5px] rounded-[25px] bg-black" />
      <img
        src="r_3zz0e6y1m-hd-1.jpeg"
        className="w-[724.55px] h-[406.97px] absolute left-[84.5px] top-[284.5px] rounded-[25px] object-cover"
      />
    </div>
    <div
      className="w-[726px] h-[409.15px] absolute left-[84.5px] top-[284.5px] rounded-[25px]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.5) 12.52%, rgba(255,255,255,0.25) 54.77%, rgba(0,0,0,0.5) 96.8%)",
      }}
    />
    <svg
      width={108}
      height={77}
      viewBox="0 0 108 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[107.56px] h-[75.62px] absolute left-[393.14px] top-[450.69px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <g clip-path="url(#clip0_174_54)">
        <path
          d="M105.316 12.4891C104.699 10.2093 103.496 8.13081 101.826 6.46069C100.155 4.79057 98.0771 3.58708 95.7972 2.97006C87.4507 0.693756 53.859 0.693756 53.859 0.693756C53.859 0.693756 20.2655 0.762659 11.919 3.03897C9.63915 3.65602 7.5607 4.85958 5.89065 6.52977C4.2206 8.19997 3.01723 10.2785 2.40037 12.5585C-0.124243 27.3885 -1.10359 49.986 2.46969 64.2228C3.08661 66.5027 4.29001 68.5812 5.96006 70.2513C7.6301 71.9214 9.70853 73.1249 11.9884 73.7419C20.3348 76.0182 53.9275 76.0182 53.9275 76.0182C53.9275 76.0182 87.5196 76.0182 95.8657 73.7419C98.1456 73.125 100.224 71.9215 101.894 70.2514C103.564 68.5813 104.768 66.5028 105.385 64.2228C108.048 49.3718 108.868 26.7885 105.316 12.4896V12.4891Z"
          fill="#FF0000"
        />
        <path d="M43.167 54.4967L71.034 38.3558L43.167 22.2149V54.4967Z" fill="white" />
      </g>
      <defs>
        <clippath id="clip0_174_54">
          <rect x="0.135742" y="0.693756" width="107.556" height="75.625" rx={25} fill="white" />
        </clippath>
      </defs>
    </svg>
    <img
      src="image-23.png"
      className="w-[61.77px] h-[61.77px] absolute left-[93.95px] top-[295.4px] rounded-[25px] object-cover"
      style={{ boxShadow: "0px 4px 20px 0 rgba(0,0,0,0.86)" }}
    />
    <p className="w-[481px] h-7 absolute left-[135px] top-[309px] text-[26px] font-medium text-center text-white">
      How to become ISRO SCientist
    </p>
    <svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[34.16px] h-[34.16px] absolute left-[637px] top-[305px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M17.0779 2.84634C9.25047 2.84634 2.84619 9.25062 2.84619 17.0781C2.84619 24.9055 9.25047 31.3098 17.0779 31.3098C24.9054 31.3098 31.3096 24.9055 31.3096 17.0781C31.3096 9.25062 24.9054 2.84634 17.0779 2.84634ZM23.0552 23.0554L15.6547 18.5012V9.96221H17.7895V17.3627L24.1938 21.2053L23.0552 23.0554Z"
        fill="#F8F8F8"
      />
    </svg>
    <svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[34.16px] h-[34.16px] absolute left-[742.68px] top-[306.8px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M19.1859 10.6417V4.48218L25.8848 11.1811L31.2559 16.5521L25.7895 21.1077L19.1859 26.6111V20.584C7.59277 19.7101 3.53104 26.419 3.53104 26.419C3.53104 22.2391 3.87544 17.9013 7.16155 14.6166C10.9813 10.7954 16.5132 10.525 19.1859 10.6417Z"
        fill="#F8F8F8"
      />
    </svg>
    <p className="w-[159px] h-[18px] absolute left-[574px] top-[345px] text-xl font-medium text-center text-white">
      Watch Later
    </p>
    <p className="w-[58px] h-[18px] absolute left-[730px] top-[345px] text-xl font-medium text-center text-white">
      Share
    </p>
  </div>
  <p className="w-[767px] h-[150px] absolute left-[94px] top-[162px] text-[44px] font-bold text-left text-white">
    How to become ISRO SCientist
  </p>
  <div className="w-[407px] h-[69px]">
    <div className="w-[407px] h-[69px] absolute left-[834px] top-[383px] rounded-[25px] bg-[#2c2e40] border-2 border-[#5b5b5b]" />
    <p className="absolute left-[1142px] top-[409px] text-base font-bold text-left text-[#00e0ff]">
      Share Now
    </p>
    <p className="absolute left-[856px] top-[408px] text-lg font-bold text-left text-white">
      https://www.youtube.com/...
    </p>
  </div>
  <div className="w-[394.76px] h-[146px]">
    <p className="w-[292.76px] h-[41.82px] absolute left-[944px] top-[578px] text-[25px] text-center text-[#7b7a7a]">
      -RR Elan Govan
    </p>
    <img
      src="197647_1448044820517_6904921_n-1.png"
      className="w-[102px] h-[102px] absolute left-[841.5px] top-[547.5px] rounded-[401px] object-none"
    />
    <p className="absolute left-[845px] top-[504px] text-[22px] font-bold text-center text-white">
      Speakers
    </p>
  </div>
  <svg
    width={390}
    height={1}
    viewBox="0 0 390 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[843px] top-[489px]"
    preserveAspectRatio="none"
  >
    <line y1="0.5" x2="389.032" y2="0.5" stroke="#383838" />
  </svg>
  <div className="w-[1181px] h-[962px]">
    <img
      src="r_3zz0e6y1m-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[76.5px] top-[869.5px] rounded-[25px] object-cover"
    />
    <img
      src="197647_1448044820517_6904921_n-2.png"
      className="w-16 h-16 absolute left-[81.5px] top-[1095.5px] rounded-[401px] object-none"
    />
    <p className="absolute left-[151px] top-[1096px] text-lg font-medium text-center text-white">
      How to become ISRO SCientist
    </p>
    <p className="absolute left-[165px] top-[1123px] text-lg text-center text-[#7b7a7a]">
      -RR Elan Govan
    </p>
    <div
      className="w-24 h-[43px] absolute left-[92.5px] top-[1028.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[107px] top-[1040px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <img
      src="1haxtbbn3j0-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[76.5px] top-[1541.5px] rounded-[25px] object-cover"
    />
    <img
      src="8iqimbfsuy8-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[480.5px] top-[869.5px] rounded-[25px] object-cover"
    />
    <div
      className="w-24 h-[43px] absolute left-[493.5px] top-[1028.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[508px] top-[1040px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <p className="absolute left-[560px] top-[1096px] text-lg font-medium text-center text-white">
      Variable Stars and the AAVSO{" "}
    </p>
    <p className="absolute left-[573px] top-[1123px] text-lg font-medium text-center text-[#605d5d]">
      -Teja Begari
    </p>
    <img
      src="image-4.png"
      className="w-16 h-16 absolute left-[489.5px] top-[1095.5px] rounded-[214px] object-none"
    />
    <img
      src="ncra8cjo_tu-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[883.5px] top-[869.5px] rounded-[25px] object-cover"
    />
    <img
      src="image-5.png"
      className="w-16 h-16 absolute left-[883.5px] top-[1095.5px] rounded-[200px] object-cover"
    />
    <p className="absolute left-[968px] top-[1097px] text-[17px] font-medium text-center text-white">
      Human Analog Space Mission
    </p>
    <div
      className="w-24 h-[43px] absolute left-[900.5px] top-[1028.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[915px] top-[1040px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <p className="absolute left-[969px] top-[1123px] text-lg font-medium text-center text-[#605d5d]">
      -Eleonore Poli
    </p>
    <img
      src="gaud9arajwg-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[76.5px] top-[1208.5px] rounded-[25px] object-cover"
    />
    <p className="absolute left-[165px] top-[1435px] text-lg font-medium text-center text-white">
      Life Beyond Earth
    </p>
    <p className="absolute left-[167px] top-[1462px] text-lg text-center text-[#7b7a7a]">
      -Anuj Soni
    </p>
    <img
      src="image-6.png"
      className="w-16 h-16 absolute left-[81.5px] top-[1434.5px] object-cover"
    />
    <div
      className="w-24 h-[43px] absolute left-[92.5px] top-[1366.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[107px] top-[1378px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <img
      src="6x05_hobrgq-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[480.5px] top-[1208.5px] rounded-[25px] object-cover"
    />
    <p className="absolute left-[566px] top-[1435px] text-lg font-medium text-center text-white">
      Demystifying Black Holes
    </p>
    <p className="absolute left-[566px] top-[1462px] text-lg text-center text-[#7b7a7a]">
      -Shivika Lamba
    </p>
    <img
      src="image-7.png"
      className="w-16 h-16 absolute left-[480.5px] top-[1434.5px] rounded-[200px] object-cover"
    />
    <img
      src="jl7fe1jwuku-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[883.5px] top-[1208.5px] rounded-[25px] object-cover"
    />
    <img
      src="whatsapp-image-2022-05-04-at-16.30-1.png"
      className="w-16 h-[63.77px] absolute left-[900.5px] top-[1434.5px] rounded-[141px] object-none"
      style={{ boxShadow: "0px 4px 10px 0 rgba(0,0,0,0.6)" }}
    />
    <p className="absolute left-[969px] top-[1435px] text-lg font-medium text-center text-white">
      Citizen Science for Everyone
    </p>
    <p className="absolute left-[983px] top-[1462px] text-lg text-center text-[#7b7a7a]">
      -Amit Raka
    </p>
    <p className="absolute left-[566px] top-[1793px] text-lg text-center text-[#7b7a7a]">
      -Amit Raka
    </p>
    <div
      className="w-24 h-[43px] absolute left-[496.5px] top-[1366.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[511px] top-[1378px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <div
      className="w-24 h-[43px] absolute left-[900.5px] top-[1366.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[915px] top-[1378px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <img
      src="image-8.png"
      className="w-16 h-16 absolute left-[76.5px] top-[1767.5px] rounded-[255px] object-none"
    />
    <p className="absolute left-[146px] top-[1768px] text-[17px] font-medium text-left text-white">
      #Rad at Home India Citizen Science
    </p>
    <p className="absolute left-[157px] top-[1793px] text-lg text-center text-[#7b7a7a]">
      -Dr. Anand Hota
    </p>
    <div
      className="w-24 h-[43px] absolute left-[92.5px] top-[1697.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[107px] top-[1709px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <img
      src="3p0vbfi2jh8-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[480.5px] top-[1541.5px] rounded-[25px] object-cover"
    />
    <img
      src="whatsapp-image-2022-05-04-at-16.30-1.png"
      className="w-16 h-[63.77px] absolute left-[480.5px] top-[1760.5px] rounded-[141px] object-none"
      style={{ boxShadow: "0px 4px 10px 0 rgba(0,0,0,0.6)" }}
    />
    <p className="absolute left-[560px] top-[1766px] text-lg font-medium text-center text-white">
      Mobile Astrophotography
    </p>
    <div
      className="w-24 h-[43px] absolute left-[496.5px] top-[1698.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[511px] top-[1710px] text-xl font-bold text-center text-white">
      Watch
    </p>
    <img
      src="tu7pz5qa9qe-hd-1.jpeg"
      className="w-[374px] h-[210.38px] absolute left-[883.5px] top-[1541.5px] rounded-[25px] object-cover"
    />
    <img
      src="whatsapp-image-2022-04-30-at-19.39-1.png"
      className="w-16 h-16 absolute left-[884.5px] top-[1760.5px] rounded-[326px] object-none"
    />
    <p className="absolute left-[958px] top-[1766px] text-lg font-medium text-left text-white">
      Careers after Aerospace Eng.
    </p>
    <p className="absolute left-[965px] top-[1793px] text-lg text-center text-[#7b7a7a]">
      -Pon Maa Kishan
    </p>
    <div
      className="w-24 h-[43px] absolute left-[899.5px] top-[1697.5px] rounded-xl bg-[#2d2d2d]"
      style={{ boxShadow: "0px 4px 41px 0 rgba(0,0,0,0.88)" }}
    />
    <p className="absolute left-[914px] top-[1709px] text-xl font-bold text-center text-white">
      Watch
    </p>
  </div>
  <p className="absolute left-[82px] top-[798px] text-[32px] font-bold text-center text-white">
    Previous Webinars
  </p>
  <svg
    width={128}
    height={108}
    viewBox="0 0 128 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[810.15px] top-[1907px]"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_d_177_167)">
      <path
        d="M24.1514 50C24.1514 66.5678 41.8966 80 63.7842 80C85.6718 80 103.417 66.5678 103.417 50C103.417 33.4322 85.6718 20 63.7842 20C41.8966 20 24.1514 33.4322 24.1514 50ZM66.8329 38.4486L54.7182 47.6923H83.2195V52.3077H54.7182L66.8329 61.5514L62.5075 64.8024L43.1027 50L62.5075 35.1976L66.8329 38.4486Z"
        fill="#00B2FF"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_177_167"
        x="0.151367"
        y={0}
        width="127.266"
        height={108}
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feflood flood-opacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feoffset dy={4} />
        <fegaussianblur stdDeviation={12} />
        <fecomposite in2="hardAlpha" operator="out" />
        <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.52 0" />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_177_167" />
        <feblend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_177_167" result="shape" />
      </filter>
    </defs>
  </svg>
</div>
  );
};
export default App;
