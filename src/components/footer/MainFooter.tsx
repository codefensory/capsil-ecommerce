import Logo from "~/components/logo";
const MainFooter = () => {
  return (
    <div className="bg-capsil-brown pt-24 pb-16">
      <div className="flex justify-between items-center w-full px-36 toTable:flex-col tablet:gap-y-4 mobile:gap-y-3">
        <div>
          <Logo size="lg" variant="green" />
          <div className="flex justify-center space-x-3 m-auto mt-3">
            <a href="#">
              <img src="/Facebook.svg" />
            </a>
            <a href="#">
              <img src="/Instagram.svg" />
            </a>
            <a href="#">
              <img src="/Twitter.svg" />
            </a>
          </div>
        </div>
        <div className="toTable:text-center ">
          <h5 className="font-cormorat text-white text-3xl font-bold tablet:text-2xl">
            Contacto
          </h5>
          <h5 className="mt-11 toTable:mt-2 font-dmSans text-capsil-gold text-sm">
            CONTACTANOS
          </h5>
          <div className="mt-8 font-dmSans toTable:mt-4 text-[#888682]">
            <p>Phone +519293969</p>
            <p>leonbarbozaelmerjoselito@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-full px-16 max-w-6xl m-auto mt-16 toTable:mt-8">
        <div className="w-full border-t border-solid border-[rgba(97,119,152,0.2)]"></div>
        <p className="font-dmSans text-white w-full text-center mt-10">
          © 2022 Capsil Company. All rights reserved.{" "}
          <a href="#" className="text-capsil-gold">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-capsil-gold">
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
};

export default MainFooter;
