import { AboutCoffeItem } from "./AboutCoffeItem";

// TODO: Usar colores y px de tailwind en los textos
export const AboutCoffeInfo = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white p-16">
      <h1 className="font-semibold text-5xl tablet:text-3xl mobile:text-2xl toTable:text-center">
        Nos enfocamos en brindar calidad
      </h1>
      <div className="relative w-full max-w-[1440px] toTable:mt-6">
        <div className="flex items-center w-full max-w-7xl mx-auto">
          <div className="flex flex-col flex-1 z-10 max-w-[498px] space-y-4 toTable:gap-y-7">
            <AboutCoffeItem
              title="Artesania"
              description="Nuestra pasión por la artesanía se refleja en cada detalle, desde el café hasta los productos típicos de Cajamarca."
              icon="/about-icon 1.svg"
            />
            <AboutCoffeItem
              title="Café seleccionado"
              description="Nos enorgullece colaborar estrechamente con nuestros agricultores locales, quienes con dedicación y cuidado cultivan los granos de café que hacen que nuestra bebida sea única"
              icon="/about-icon 2.svg"
            />
            <AboutCoffeItem
              title="Café de alta calidad"
              description="Cosechado con pasión por agricultores locales, nuestro café representa la tradición de la región"
              icon="/about-icon 3.svg"
            />
          </div>
          <div className="flex-1 toTable:hidden w-[897px] h-[600px] bg-[url(/about-coffe.png)] bg-no-repeat bg-center bg-contain" />
        </div>
        <div className="hidden">
          <img
            className="absolute w-[186] h-[150px] -bottom-0 -left-0"
            src="/bean3.svg"
          />
        </div>
      </div>
    </div>
  );
};
