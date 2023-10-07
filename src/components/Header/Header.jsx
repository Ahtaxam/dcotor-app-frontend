import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useContext, useEffect, useRef } from "react";
import UserAvatar from "../../assets/images/user-avatar.png";

import { AuthContext } from "./../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/blogs",
    display: "Health Blogs",
  },
];

const Restricted = ["Find a Doctor", "Services"];

const Header = () => {
  const { user, token, role } = useContext(AuthContext);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header ref={headerRef} className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =========== logo ========== */}
          <Link to="/">
            <svg
              width="100.59999999999997"
              height="100.7125418982898"
              viewBox="0 0 300 190.9872532321965"
              class="css-1j8o68f"
            >
              <defs id="SvgjsDefs3838">
                <linearGradient id="SvgjsLinearGradient3845">
                  <stop
                    id="SvgjsStop3846"
                    stop-color="#2d388a"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop3847"
                    stop-color="#00aeef"
                    offset="1"
                  ></stop>
                </linearGradient>
                <linearGradient id="SvgjsLinearGradient3848">
                  <stop
                    id="SvgjsStop3849"
                    stop-color="#fbb040"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop3850"
                    stop-color="#f9ed32"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g
                id="SvgjsG3839"
                featurekey="cWd8YO-0"
                transform="matrix(1.380176096915869,0,0,1.380176096915869,80.99117146191364,-22.24910585725253)"
                fill="#137dc5"
              >
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M93.0250244,49.9575806c-0.9624023-4.2189331-3.4917603-12.6459351-3.4917603-12.6459351   s-1.5689087,0.0519409-2.3108521,2.5056763c-0.1811523,0.5975952-0.3125,1.3362427-0.3590088,2.2521973l1.0268555,6.0479126   c0,0,2.631897,14.541687-10.843689,18.2561035c-2.1480713,0.5962524-4.6983032,0.9157715-7.7391968,0.8575439   c0,0,13.1292114-7.1633911,10.6062012-15.385437c0,0-1.9616089,1.8972168-5.6988525,5.0703125   c-3.7425537,3.1705322-8.9544067,4.7792358-13.7275391,7.3793335c-4.7756348,2.6054077-9.1629639,10.2632446-7.7455444,16.09375   l0.0392456,1.0091553c0,0,2.7098389-1.6767578,7.3341064-3.487915c0.015686-0.0054932,0.0366821-0.0085449,0.0549316-0.0194092   c3.3270874-1.1276245,7.3389893-2.2019653,11.8557739-2.8331299c0,0,1.6711426-0.0748901,4.4701538-1.3245239   c2.0750732-0.565918,5.8869019-2.0811157,10.614563-6.1818848C93.9636841,61.6055908,93.9847412,54.1818237,93.0250244,49.9575806z   "></path>
                  <path d="M84.5957031,48.8632813c0,0,2.2442627,12.4476318-8.0795898,17.2568359   c0.0234985-0.0083008,0.0523682-0.0140991,0.0758057-0.0223999c13.3881226-3.7496338,10.7678833-18.2336426,10.7678833-18.2336426   l-1.0269775-6.0479126c0.0466309-0.9159546,0.1778564-1.6546631,0.3590698-2.2521973   c-0.2744141-0.9259644-0.447876-1.5039673-0.447876-1.5039673s-0.7305298,0.0289917-1.4262695,0.8172607   c-0.5773315,0.6494141-1.1373291,1.8218384-1.2437134,3.9406738L84.5957031,48.8632813z"></path>
                  <path d="M74.4660034,66.3201904c0.5574951-0.144165,1.088501-0.3010254,1.59552-0.4758301   c-0.0235596,0.0083618-0.0523682,0.0140991-0.0758667,0.0223389c10.3237915-4.8092041,8.0795288-17.2567749,8.0795288-17.2567749   l-1.0216675-6.0454102c0.1063843-2.1187744,0.6663818-3.2911987,1.2437744-3.9406128   c-0.7334595,0.3076782-1.9880371,1.3112793-2.229248,4.5579224l0.8800659,6.0690308   C82.9381104,49.2508545,84.899292,61.7455444,74.4660034,66.3201904z"></path>
                  <path d="M39.5128174,64.2952881c-4.7731323-2.6000977-9.9849243-4.2088013-13.7275391-7.3793335   c-3.7371826-3.1730957-5.6988525-5.0703125-5.6988525-5.0703125c-2.5229492,8.2220459,10.6062622,15.385437,10.6062622,15.385437   c-3.0409546,0.0582275-5.5911865-0.2612915-7.7392578-0.8575439c-13.4755859-3.7144165-10.843689-18.2561035-10.843689-18.2561035   l1.0269165-6.0479126c-0.0465698-0.9159546-0.1779175-1.6546021-0.3590698-2.2521973   c-0.7418823-2.4537354-2.310791-2.5056763-2.310791-2.5056763s-2.5294189,8.427002-3.4917603,12.6459351   c-0.9597778,4.2242432-0.9386597,11.6480103,5.9145508,17.59375c4.7276611,4.100769,8.5395508,5.6159668,10.614624,6.1818848   c2.7990112,1.2496338,4.4701538,1.3245239,4.4701538,1.3245239c4.5167236,0.6311646,8.5286255,1.7055054,11.8557129,2.8331299   c0.0182495,0.0108643,0.0392456,0.013916,0.0549316,0.0194092c4.6243286,1.8111572,7.3341064,3.487915,7.3341064,3.487915   l0.0393066-1.0091553C48.6757813,74.5585327,44.2885132,66.9006958,39.5128174,64.2952881z"></path>
                  <path d="M12.6402588,47.8640747c0,0-2.6203003,14.4840088,10.7678223,18.2336426   c0.0234375,0.0083008,0.0523071,0.0140991,0.0758057,0.0223999c-10.3238525-4.8092041-8.0795898-17.2568359-8.0795898-17.2568359   l1.0216675-6.0453491c-0.1063232-2.1188354-0.6663208-3.2912598-1.2436523-3.9406738   c-0.6958008-0.788269-1.4263306-0.8172607-1.4263306-0.8172607s-0.1734009,0.5780029-0.447876,1.5039673   c0.1812134,0.5975342,0.312439,1.3362427,0.3590698,2.2521973L12.6402588,47.8640747z"></path>
                  <path d="M15.9348145,48.6099243c0,0-2.2442627,12.4475708,8.0795898,17.2567749   c-0.0235596-0.0082397-0.0523682-0.0139771-0.0758667-0.0223389c0.506958,0.1748047,1.0379639,0.331665,1.59552,0.4758301   c-10.4332886-4.574646-8.472168-17.0693359-8.472168-17.0693359l0.8800659-6.0690308   c-0.2412109-3.2466431-1.4957886-4.2502441-2.229187-4.5579224c0.5773315,0.6494141,1.1373291,1.8218384,1.2437134,3.9406128   L15.9348145,48.6099243z"></path>
                  <path d="M74.4660034,31.0813599c0-9.3648071-7.7744751-14.9608765-15.2904663-14.9608765   c-4.6035156,0-7.9351807,2.1230469-9.1755371,5.6194458c-1.2403564-3.4963989-4.5720215-5.6194458-9.1755371-5.6194458   c-7.5159912,0-15.2904663,5.5960693-15.2904663,14.9608765c0,16.3329468,23.2214966,29.2670898,24.2102051,29.8096313   L50,61.0314941l0.2557983-0.1405029C51.2445068,60.3484497,74.4660034,47.4143066,74.4660034,31.0813599z M50,59.8134766   c-2.56427-1.4735107-23.4022217-13.9143066-23.4022217-28.7321167c0-9.5855713,8.3192749-13.8971558,14.2266846-13.8971558   c4.1785889,0,8.6436768,2.0521851,8.6436768,7.8118286h1.0637207c0-5.7596436,4.4650879-7.8118286,8.6436768-7.8118286   c3.4267578,0,6.913269,1.3018799,9.5653076,3.5717163c2.1264648,1.8199463,4.661377,5.0888062,4.661377,10.3254395   C73.4022217,45.8927002,52.5640259,58.3391724,50,59.8134766z"></path>
                  <path d="M52.901001,39.46521c-0.8414307,0.9473877-1.5890503,2.1038208-2.1619263,3.3322144   c-0.4399414-1.7194214-1.1651001-3.3981323-2.0696411-4.7944336c0.8693237-5.7533569-1.6034546-11.899292-18.9500732-10.7902832   c4.7442627,2.3035889,4.3422241,17.1661377,17.3151245,13.9934082   c-2.4728394-6.1315918-8.9377441-10.3244019-11.7109375-11.4525146c7.3461914,2.645813,11.1411133,6.59198,12.9542236,10.1260986   c0,0,0.0001221-0.0003662,0.0001831-0.0006104c1.0109863,2.3565674,1.6849976,5.2156372,1.1311035,8.3192139   c-0.3616943,2.0273438,0.9129028,2.378479,1.4024658,0.854248c0.0259399-0.0809326,0.0413818-0.1680298,0.0646973-0.2505493   c0.0030518-0.0110474,0.0055542-0.0223999,0.008606-0.0334473c0.2746582-0.9926147,0.3662109-2.0949097,0.2938232-3.2421265   c0.3349609-1.671875,1.0216064-3.1588745,1.8112183-4.4277344c0.000061,0.0001831,0.000061,0.0003662,0.000061,0.0003662   c1.9849243-2.7485352,5.6951904-5.5898438,12.2346802-6.8765869c-2.4852905,0.5948486-8.4802856,3.3004761-11.3563232,8.1560669   c10.538269,4.3474121,12.1125488-8.2456055,16.4123535-9.5786133C55.7860718,29.6308594,52.9083252,34.4984741,52.901001,39.46521z   "></path>
                </g>
              </g>
              <g
                id="SvgjsG3840"
                featurekey="TZbA6h-0"
                transform="matrix(4.74833777203943,0,0,4.74833777203943,-3.608736661466289,79.13580901011149)"
                fill="url(#SvgjsLinearGradient3845)"
              >
                <path d="M0.76 20 l0 -2.32 l1.48 0 l0 -8.58 l-1.48 0 l0 -2.32 l10.56 0 l0 4.26 l-2.52 0 l0 -1.74 l-3.22 0 l0 2.78 l3.78 0 l0 2.52 l-3.78 0 l0 2.88 l3.34 0 l0 -1.94 l2.52 0 l0 4.46 l-10.68 0 z M12.920000000000002 20 l0 -1.94 l4.3 -5.14 l-2 0 l0 1.46 l-2.34 0 l0 -3.72 l8.22 0 l0 1.96 l-4.3 5.12 l2.12 0 l0 -1.46 l2.34 0 l0 3.72 l-8.34 0 z M31.6 15.36 l3.06 0.86 c-0.38 2.3 -2.1 4.06 -5.62 4.06 c-4.64 0 -6.58 -3.04 -6.58 -7 c0 -4.26 2.3 -6.78 6.6 -6.78 c3.44 0 5.44 1.6 5.44 3.96 c0 0.12 -0.02 0.22 -0.02 0.34 l-3.3 0.74 l0 -0.28 c0 -1.24 -0.54 -1.98 -2.2 -1.98 c-2.3 0 -2.98 1.34 -2.98 3.98 c0 2.92 0.9 4.24 2.96 4.24 c1.3 0 2.62 -0.56 2.64 -2.14 z M38.9 13.9 l-3.1 -0.58 c-0.02 -0.1 -0.02 -0.2 -0.02 -0.3 c0 -1.48 1.44 -2.64 4.3 -2.64 s3.92 1.18 3.92 3.76 l0 2.2 c0 0.86 0.02 1.36 0.66 1.36 c0.12 0 0.26 -0.02 0.44 -0.06 l-0.56 2.46 c-0.34 0.06 -0.64 0.08 -0.9 0.08 c-1.48 0 -2.12 -0.7 -2.34 -1.3 c-0.48 0.68 -1.2 1.4 -2.66 1.4 c-1.7 0 -3.16 -0.96 -3.16 -2.74 c0 -2.16 2.14 -3.14 5.4 -3.16 l0 -0.28 c0 -1.06 -0.26 -1.44 -1.02 -1.44 c-0.64 0 -0.98 0.26 -0.98 0.96 c0 0.08 0 0.18 0.02 0.28 z M40.879999999999995 16.88 l0 -0.74 c-1.22 0.02 -2.26 0.24 -2.26 1.16 c0 0.52 0.34 0.76 0.86 0.76 c0.6 0 1.32 -0.32 1.4 -1.18 z M46.06 20 l0 -2.26 l1.06 0 l0 -4.82 l-1.36 0 l0 -2.26 l4.26 0 l0 1.7 c0.44 -1.06 1.22 -1.98 2.48 -1.98 c1.4 0 1.84 0.7 1.84 0.7 l-1.26 2.96 s-0.3 -0.66 -1.22 -0.66 c-0.84 0 -1.32 0.78 -1.62 1.62 l0 2.74 l1.06 0 l0 2.26 l-5.24 0 z M61.2 17.02 l2.74 0.48 c-0.52 1.74 -1.76 2.78 -4.26 2.78 c-3.12 0 -4.92 -1.62 -4.92 -4.84 c0 -2.6 1.16 -5.06 4.78 -5.06 c2.94 0 4.4 1.62 4.4 4.64 l0 1.02 l-5.92 0 c0.08 1.34 0.46 1.92 1.76 1.92 c0.8 0 1.28 -0.22 1.42 -0.94 z M58.06 14.14 l2.6 0 l0 -0.02 c0 -1.1 -0.42 -1.52 -1.24 -1.52 c-0.76 0 -1.2 0.36 -1.36 1.54 z"></path>
              </g>
              <g
                id="SvgjsG3841"
                featurekey="hKLqjk-0"
                transform="matrix(0.3268151382059277,0,0,0.3268151382059277,29.960782259775712,183.568549657257)"
                fill="url(#SvgjsLinearGradient3848)"
              >
                <path d="M11.08 5.84 l-4.54 8.12 l0 5.46 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 s-0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -5.46 l-4.54 -8.12 c-0.08 -0.13334 -0.12 -0.28 -0.12 -0.44 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.16 0 0.31 0.04 0.45 0.12 s0.25 0.18666 0.33 0.32 l3.88 6.94 l3.88 -6.94 c0.08 -0.13334 0.19 -0.24 0.33 -0.32 s0.29 -0.12 0.45 -0.12 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 c0 0.16 -0.04 0.30666 -0.12 0.44 z M38.160000000000004 20.3 c-1.0933 0 -2.12 -0.20666 -3.08 -0.62 s-1.7967 -0.97668 -2.51 -1.69 s-1.2767 -1.55 -1.69 -2.51 s-0.62 -1.9867 -0.62 -3.08 c0 -1.08 0.20666 -2.1 0.62 -3.06 s0.97668 -1.7967 1.69 -2.51 s1.55 -1.2767 2.51 -1.69 s1.9867 -0.62 3.08 -0.62 c1.08 0 2.1 0.20666 3.06 0.62 s1.7967 0.97668 2.51 1.69 s1.2767 1.55 1.69 2.51 s0.62 1.98 0.62 3.06 c0 1.0933 -0.20666 2.12 -0.62 3.08 s-0.97668 1.7967 -1.69 2.51 s-1.55 1.2767 -2.51 1.69 s-1.98 0.62 -3.06 0.62 z M38.160000000000004 6.279999999999999 c-0.84 0 -1.6333 0.16 -2.38 0.48 s-1.4 0.75666 -1.96 1.31 s-1 1.2033 -1.32 1.95 s-0.48 1.54 -0.48 2.38 s0.16 1.6333 0.48 2.38 s0.76 1.4 1.32 1.96 s1.2133 1 1.96 1.32 s1.54 0.48 2.38 0.48 s1.6333 -0.16 2.38 -0.48 s1.3967 -0.76 1.95 -1.32 s0.99 -1.2133 1.31 -1.96 s0.48 -1.54 0.48 -2.38 s-0.16 -1.6333 -0.48 -2.38 s-0.75666 -1.3967 -1.31 -1.95 s-1.2033 -0.99 -1.95 -1.31 s-1.54 -0.48 -2.38 -0.48 z M73.94 20.3 c-0.84 0 -1.6266 -0.16004 -2.36 -0.48004 s-1.3767 -0.75334 -1.93 -1.3 s-0.99 -1.19 -1.31 -1.93 s-0.48 -1.53 -0.48 -2.37 l0 -8.82 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 8.82 c0 0.6 0.11334 1.16 0.34 1.68 s0.53332 0.97334 0.91998 1.36 s0.84332 0.69332 1.37 0.91998 s1.0833 0.34 1.67 0.34 c0.6 0 1.16 -0.11334 1.68 -0.34 s0.97666 -0.53332 1.37 -0.91998 s0.70334 -0.84332 0.93 -1.37 s0.34 -1.0833 0.34 -1.67 l0 -8.82 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 l0 8.82 c0 0.84 -0.16 1.63 -0.48 2.37 s-0.75666 1.3833 -1.31 1.93 s-1.2 0.98 -1.94 1.3 s-1.53 0.48 -2.37 0.48 z M106.7 13.36 l-0.24 -0.000039062 l0.26 -0.46 l3.62 6.06 c0.08 0.14666 0.12 0.3 0.12 0.46 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.16 0 -0.31 -0.04 -0.45 -0.12 s-0.25 -0.18666 -0.33 -0.32 l-3.88 -6.5 l-0.86 0 l0 6.06 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l3.52 0 c0.61334 0 1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 s-0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z M106.7 6.279999999999999 l-2.64 0 l0 5.3 l2.64 0 c0.36 0 0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 s-0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 z M168.52 20.3 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -6.78 l-7.86 0 l0 6.78 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 5.46 l7.86 0 l0 -5.46 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 l0 14.02 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 z M199.44 20.3 l-6.88 -0.000019531 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -0.04 l0 -0.04 l0 -13.94 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l6.88 0 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 c0 0.25334 -0.08666 0.46334 -0.26 0.63 s-0.38668 0.25 -0.64002 0.25 l-6 0 l0 5.1 l5.06 0 c0.24 0 0.44666 0.08334 0.62 0.25 s0.26 0.37666 0.26 0.63 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 l-5.06 0 l0 5.38 l6 0 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38668 0.26 0.64002 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 z M233.38 20.22 c-0.10666 0.05334 -0.21992 0.08 -0.33992 0.08 c-0.17334 0 -0.33668 -0.04666 -0.49002 -0.14 s-0.26334 -0.22668 -0.33 -0.40002 l-1.58 -3.72 l-7.26 0 l-1.58 3.72 c-0.09334 0.22666 -0.25334 0.38666 -0.48 0.48 s-0.45332 0.08668 -0.67998 -0.01998 c-0.22666 -0.09334 -0.38666 -0.25334 -0.48 -0.48 s-0.08668 -0.45332 0.01998 -0.67998 l1.8 -4.26 l4.22 -9.88 c0.06666 -0.17334 0.17332 -0.30668 0.31998 -0.40002 s0.31332 -0.14 0.49998 -0.14 c0.17334 0 0.33334 0.04666 0.48 0.14 s0.25332 0.22668 0.31998 0.40002 c1.0133 2.3734 2.02 4.73 3.02 7.07 s2.0066 4.6966 3.02 7.07 c0.09334 0.22666 0.09334 0.45332 0 0.67998 s-0.25334 0.38666 -0.48 0.48 z M227.01999999999998 7.539999999999999 l-2.88 6.72 l5.74 0 z M261.06 20.3 l-5.34 0 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.25334 0.08666 -0.46334 0.26 -0.63 s0.38 -0.25 0.62 -0.25 c0.25334 0 0.46334 0.08334 0.63 0.25 s0.25 0.37666 0.25 0.63 l0 13.14 l4.46 0 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 s-0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 z M290.04 6.279999999999999 l-3.24 0 l0 13.14 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -13.14 l-3.24 0 c-0.24 0 -0.44666 -0.08334 -0.62 -0.25 s-0.26 -0.37666 -0.26 -0.63 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 l8.26 0 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 c0 0.25334 -0.08666 0.46334 -0.26 0.63 s-0.38 0.25 -0.62 0.25 z M322.14000000000004 20.3 c-0.24 0 -0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -6.78 l-7.86 0 l0 6.78 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 5.46 l7.86 0 l0 -5.46 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 l0 14.02 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38668 0.26 -0.64002 0.26 z M345.64000000000004 22.52 c-0.18666 0.12 -0.37336 0.18 -0.56002 0.18 c-0.24 0 -0.44334 -0.08334 -0.61 -0.25 s-0.25 -0.37 -0.25 -0.61 c0 -0.16 0.03 -0.29334 0.09 -0.4 s0.13666 -0.2 0.23 -0.28 c0.18666 -0.17334 0.31332 -0.32334 0.37998 -0.45 s0.1 -0.29 0.1 -0.49 l0 -0.08 c-0.18666 -0.10666 -0.33332 -0.24666 -0.43998 -0.42 s-0.16 -0.37334 -0.16 -0.6 c0 -0.33334 0.11666 -0.61 0.35 -0.83 s0.51 -0.33 0.83 -0.33 c0.41334 0 0.71668 0.13334 0.91002 0.4 s0.29 0.56666 0.29 0.9 l0 0.96 c0 0.45334 -0.10334 0.88 -0.31 1.28 s-0.49 0.74 -0.85 1.02 z M401.38000000000005 20.3 c-1.0933 0 -2.12 -0.20666 -3.08 -0.62 s-1.7967 -0.97668 -2.51 -1.69 s-1.2767 -1.55 -1.69 -2.51 s-0.62 -1.9867 -0.62 -3.08 c0 -1.08 0.20666 -2.1 0.62 -3.06 s0.97668 -1.7967 1.69 -2.51 s1.55 -1.2767 2.51 -1.69 s1.9867 -0.62 3.08 -0.62 c1.08 0 2.1 0.20666 3.06 0.62 s1.7967 0.97668 2.51 1.69 s1.2767 1.55 1.69 2.51 s0.62 1.98 0.62 3.06 c0 1.0933 -0.20666 2.12 -0.62 3.08 s-0.97668 1.7967 -1.69 2.51 s-1.55 1.2767 -2.51 1.69 s-1.98 0.62 -3.06 0.62 z M401.38000000000005 6.279999999999999 c-0.84 0 -1.6333 0.16 -2.38 0.48 s-1.4 0.75666 -1.96 1.31 s-1 1.2033 -1.32 1.95 s-0.48 1.54 -0.48 2.38 s0.16 1.6333 0.48 2.38 s0.76 1.4 1.32 1.96 s1.2133 1 1.96 1.32 s1.54 0.48 2.38 0.48 s1.6333 -0.16 2.38 -0.48 s1.3967 -0.76 1.95 -1.32 s0.99 -1.2133 1.31 -1.96 s0.48 -1.54 0.48 -2.38 s-0.16 -1.6333 -0.48 -2.38 s-0.75666 -1.3967 -1.31 -1.95 s-1.2033 -0.99 -1.95 -1.31 s-1.54 -0.48 -2.38 -0.48 z M437.1600000000001 20.3 c-0.84 0 -1.6266 -0.16004 -2.36 -0.48004 s-1.3767 -0.75334 -1.93 -1.3 s-0.99 -1.19 -1.31 -1.93 s-0.48 -1.53 -0.48 -2.37 l0 -8.82 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 8.82 c0 0.6 0.11334 1.16 0.34 1.68 s0.53332 0.97334 0.91998 1.36 s0.84332 0.69332 1.37 0.91998 s1.0833 0.34 1.67 0.34 c0.6 0 1.16 -0.11334 1.68 -0.34 s0.97666 -0.53332 1.37 -0.91998 s0.70334 -0.84332 0.93 -1.37 s0.34 -1.0833 0.34 -1.67 l0 -8.82 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.25334 0 0.46668 0.08666 0.64002 0.26 s0.26 0.38 0.26 0.62 l0 8.82 c0 0.84 -0.16 1.63 -0.48 2.37 s-0.75666 1.3833 -1.31 1.93 s-1.2 0.98 -1.94 1.3 s-1.53 0.48 -2.37 0.48 z M469.9200000000001 13.36 l-0.24 -0.000039062 l0.26 -0.46 l3.62 6.06 c0.08 0.14666 0.12 0.3 0.12 0.46 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.16 0 -0.31 -0.04 -0.45 -0.12 s-0.25 -0.18666 -0.33 -0.32 l-3.88 -6.5 l-0.86 0 l0 6.06 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l3.52 0 c0.61334 0 1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 s-0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z M469.9200000000001 6.279999999999999 l-2.64 0 l0 5.3 l2.64 0 c0.36 0 0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 s-0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 z M525.6400000000002 13.36 l-2.64 -0.000039062 l0 6.06 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l3.52 0 c0.61334 0 1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 s-0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z M525.6400000000002 6.279999999999999 l-2.64 0 l0 5.3 l2.64 0 c0.36 0 0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 s-0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 z M555.4200000000002 13.36 l-0.24 -0.000039062 l0.26 -0.46 l3.62 6.06 c0.08 0.14666 0.12 0.3 0.12 0.46 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.16 0 -0.31 -0.04 -0.45 -0.12 s-0.25 -0.18666 -0.33 -0.32 l-3.88 -6.5 l-0.86 0 l0 6.06 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l3.52 0 c0.61334 0 1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 s-0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z M555.4200000000002 6.279999999999999 l-2.64 0 l0 5.3 l2.64 0 c0.36 0 0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 s-0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 z M581.6800000000001 20.3 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 14.02 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 z M612.2600000000001 20.3 c-1.0933 0 -2.12 -0.20666 -3.08 -0.62 s-1.7967 -0.97668 -2.51 -1.69 s-1.2767 -1.55 -1.69 -2.51 s-0.62 -1.9867 -0.62 -3.08 c0 -1.08 0.20666 -2.1 0.62 -3.06 s0.97668 -1.7967 1.69 -2.51 s1.55 -1.2767 2.51 -1.69 s1.9867 -0.62 3.08 -0.62 c1.08 0 2.1 0.20666 3.06 0.62 s1.7967 0.97668 2.51 1.69 s1.2767 1.55 1.69 2.51 s0.62 1.98 0.62 3.06 c0 1.0933 -0.20666 2.12 -0.62 3.08 s-0.97668 1.7967 -1.69 2.51 s-1.55 1.2767 -2.51 1.69 s-1.98 0.62 -3.06 0.62 z M612.2600000000001 6.279999999999999 c-0.84 0 -1.6333 0.16 -2.38 0.48 s-1.4 0.75666 -1.96 1.31 s-1 1.2033 -1.32 1.95 s-0.48 1.54 -0.48 2.38 s0.16 1.6333 0.48 2.38 s0.76 1.4 1.32 1.96 s1.2133 1 1.96 1.32 s1.54 0.48 2.38 0.48 s1.6333 -0.16 2.38 -0.48 s1.3967 -0.76 1.95 -1.32 s0.99 -1.2133 1.31 -1.96 s0.48 -1.54 0.48 -2.38 s-0.16 -1.6333 -0.48 -2.38 s-0.75666 -1.3967 -1.31 -1.95 s-1.2033 -0.99 -1.95 -1.31 s-1.54 -0.48 -2.38 -0.48 z M646.3800000000001 13.36 l-0.24 -0.000039062 l0.26 -0.46 l3.62 6.06 c0.08 0.14666 0.12 0.3 0.12 0.46 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.16 0 -0.31 -0.04 -0.45 -0.12 s-0.25 -0.18666 -0.33 -0.32 l-3.88 -6.5 l-0.86 0 l0 6.06 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 l3.52 0 c0.61334 0 1.19 0.11666 1.73 0.35 s1.01 0.55 1.41 0.95 s0.71666 0.86666 0.95 1.4 s0.35 1.1067 0.35 1.72 s-0.11666 1.1867 -0.35 1.72 s-0.55 1 -0.95 1.4 s-0.87 0.71666 -1.41 0.95 s-1.1167 0.35 -1.73 0.35 z M646.3800000000001 6.279999999999999 l-2.64 0 l0 5.3 l2.64 0 c0.36 0 0.70334 -0.07 1.03 -0.21 s0.61 -0.33 0.85 -0.57 s0.43 -0.52 0.57 -0.84 s0.21 -0.66 0.21 -1.02 s-0.07 -0.70334 -0.21 -1.03 s-0.33 -0.61 -0.57 -0.85 s-0.52334 -0.43 -0.85 -0.57 s-0.67 -0.21 -1.03 -0.21 z M672.64 20.3 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -14.02 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38668 -0.26 0.64002 -0.26 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 l0 14.02 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 z M703.36 6.279999999999999 l-3.24 0 l0 13.14 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 c-0.25334 0 -0.46668 -0.08666 -0.64002 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -13.14 l-3.24 0 c-0.24 0 -0.44666 -0.08334 -0.62 -0.25 s-0.26 -0.37666 -0.26 -0.63 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 l8.26 0 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 c0 0.25334 -0.08666 0.46334 -0.26 0.63 s-0.38 0.25 -0.62 0.25 z M734.36 5.84 l-4.54 8.12 l0 5.46 c0 0.24 -0.08666 0.44666 -0.26 0.62 s-0.38 0.26 -0.62 0.26 s-0.44666 -0.08666 -0.62 -0.26 s-0.26 -0.38 -0.26 -0.62 l0 -5.46 l-4.54 -8.12 c-0.08 -0.13334 -0.12 -0.28 -0.12 -0.44 c0 -0.24 0.08666 -0.44666 0.26 -0.62 s0.38 -0.26 0.62 -0.26 c0.16 0 0.31 0.04 0.45 0.12 s0.25 0.18666 0.33 0.32 l3.88 6.94 l3.88 -6.94 c0.08 -0.13334 0.19 -0.24 0.33 -0.32 s0.29 -0.12 0.45 -0.12 c0.24 0 0.44666 0.08666 0.62 0.26 s0.26 0.38 0.26 0.62 c0 0.16 -0.04 0.30666 -0.12 0.44 z"></path>
              </g>
            </svg>
          </Link>
          {/* ========== nav menu =========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <>
                  {role === "doctor" && Restricted.includes(link.display) ? (
                    ""
                  ) : (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        className={(navClass) =>
                          navClass.isActive
                            ? "text-[#0067FF] font-[600] text-[16px] leading-7"
                            : "text-textColor font-[500] text-[16px] leading-7"
                        }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  )}
                </>
              ))}
              {role === "doctor" ? (
                <NavLink
                  to="/otherdoctors"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-[#0067FF] font-[600] text-[16px] leading-7"
                      : "text-textColor font-[500] text-[16px] leading-7"
                  }
                >
                  Doctors
                </NavLink>
              ) : (
                ""
              )}
            </ul>
          </div>

          {/* ========= nav right ========== */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  } `}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      className="w-full rounded-full"
                      src={user?.photo || UserAvatar}
                      alt=""
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-buttonBgColor py-2 px-6 rounded-[50px] text-white font-[600] h-[44px] flex items-center justify-center">
                  Log In
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
