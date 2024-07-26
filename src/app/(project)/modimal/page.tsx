import NavBar from "@/components/NavBar";
import Image from "next/image";
import Ecommerce from "../../../../public/assest/images/file cover.png";
import Link from "next/link";
import MainContent from "@/components/MainContent";
import MainSection from "@/components/MainSection";
import IconLogoBlack from "../../../../public/assest/images/Vector-black.svg";
const Page = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          <NavBar />
          <Image
            src={Ecommerce}
            alt="Ecommerce cover"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <MainSection>
          <div className="w-[900px] mx-auto pt-14 z-50">
            <h1 className="pb-10 font-bold text-[2rem]">About the project.</h1>
            <p className="w-[800px] leading-8">
              Modimal is a Next.js e-commerce platform for women&#39;s clothing,
              featuring a responsive Material UI design and TypeScript for code
              safety. It uses Redux Toolkit for state management and Supabase
              for database operations. The app offers user authentication,
              wishlist functionality, and persistent shopping cart via local
              storage. It leverages Next.js for optimized rendering and includes
              Stripe integration for secure checkouts. Modimal showcases modern
              web development practices with a focus on performance and user
              experience.
            </p>
            <p>
              You can view the source code on {""}
              <Link
                href="https://github.com/itsnooshin/E-commerce-clothing-women"
                style={{ textDecoration: "underline" }}
              >
                my github repository.
              </Link>{" "}
            </p>

            <div className=" w-[500px] mt-10 ">
              <div className="grid grid-cols-3  font-bold ">
                <div>Platform</div>
                <div>Category</div>
                <div>Designer & Developer</div>
              </div>
              <div className="grid grid-cols-3 pt-3 text-gray-600">
                <div>Web/Mobile</div>
                <div>Entertainment</div>
                <div>Julius Guevarra</div>
              </div>
            </div>
            <div className=" w-[900px] mt-10 ">
              <div className="  font-bold ">
                <div>Tools and Platforms</div>
              </div>
              <div className="flex gap-5 pt-3 text-gray-600">
                <div>HTML5</div>
                <span>/</span>
                <div>React JS</div>
                <span>/</span>
                <div>NextJs</div>
                <span>/</span>
                <div>Material UI</div>
                <span>/</span>
                <div>TypeScript</div>
                <span>/</span>
                <div>JavaScript</div>
                <span>/</span>
                <div>Redux Toolkit</div>
              </div>
              <div className="pt-10 relative flex justify-between">
                <div className=" absolute w-10 h-10  rounded-full -left-3 bg-[#CBC1D0] -z-50"></div>
                <Link
                  style={{
                    zIndex: "10000",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                  href={
                    "https://github.com/itsnooshin/E-commerce-clothing-women"
                  }
                >
                  Watch Online &rarr;
                </Link>

                <div className="relative">
                  <div className=" absolute w-10 h-10  rounded-full -left-3 bg-[#CBC1D0] -z-50"></div>
                  <Link
                    style={{
                      zIndex: "10000",
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                    }}
                    href={
                      "https://github.com/itsnooshin/E-commerce-clothing-women"
                    }
                  >
                    Watch GitHub &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MainSection>
      </div>

      <div className="lg:hidden block">
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <div className=" flex fixed  w-full justify-between p-3 z-50  left-0">
            <Image
              src={IconLogoBlack}
              width={35}
              height={35}
              alt="Logo for Website"
            />
            <button>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700"
              >
                <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
              </svg>
            </button>
          </div>
          <Image
            src={Ecommerce}
            alt="Ecommerce cover"
            fill
            style={{ objectFit: "cover", zIndex: 30 }}
          />
        </div>

        <MainSection>
          <div className=" mx-auto pt-14 z-50">
            <h1 className="pb-10 font-bold text-[2rem]">About the project.</h1>
            <p className=" leading-8">
              Modimal is a Next.js e-commerce platform for women&#39;s clothing,
              featuring a responsive Material UI design and TypeScript for code
              safety. It uses Redux Toolkit for state management and Supabase
              for database operations. The app offers user authentication,
              wishlist functionality, and persistent shopping cart via local
              storage. It leverages Next.js for optimized rendering and includes
              Stripe integration for secure checkouts. Modimal showcases modern
              web development practices with a focus on performance and user
              experience.
            </p>
            <p>
              You can view the source code on {""}
              <Link
                href="https://github.com/itsnooshin/E-commerce-clothing-women"
                style={{ textDecoration: "underline" }}
              >
                my github repository.
              </Link>{" "}
            </p>

            <div className="  mt-10 ">
              <div className="grid grid-cols-2  font-bold ">
                <div>Platform</div>
                <div>Category</div>
              </div>
              <div className="grid grid-cols-2  pt-3 text-gray-600">
                <div>Web/Mobile</div>
                <div>Entertainment</div>
              </div>
              <div className="flex flex-col mt-5  font-bold ">
                <div>Developer</div>
              </div>
              <div className="grid grid-cols-2  pt-3 text-gray-600">
                <div>Nooshin Bakhtiari</div>
              </div>
            </div>
            <div className="  mt-10 ">
              <div className="  font-bold ">
                <div>Tools and Platforms</div>
              </div>
              <div className="flex flex-wrap gap-5 pt-3 text-gray-600">
                <div>HTML5</div>
                <span>/</span>
                <div>React JS</div>
                <span>/</span>
                <div>NextJs</div>
                <span>/</span>
                <div>Material UI</div>
                <span>/</span>
                <div>TypeScript</div>
                <span>/</span>
                <div>JavaScript</div>
                <span>/</span>
                <div>Redux Toolkit</div>
              </div>
              {/* <div className="pt-10 relative flex justify-between">
                <div className=" absolute w-10 h-10  rounded-full -left-3 bg-[#CBC1D0] -z-50"></div>
                <Link
                  style={{
                    zIndex: "10000",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                  href={
                    "https://github.com/itsnooshin/E-commerce-clothing-women"
                  }
                >
                  Watch Online &rarr;
                </Link>

                <div className="relative">
                  <div className=" absolute w-10 h-10  rounded-full -left-3 bg-[#CBC1D0] -z-50"></div>
                  <Link
                    style={{
                      zIndex: "10000",
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                    }}
                    href={
                      "https://github.com/itsnooshin/E-commerce-clothing-women"
                    }
                  >
                    Watch GitHub &rarr;
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </MainSection>
      </div>
    </>
  );
};

export default Page;
