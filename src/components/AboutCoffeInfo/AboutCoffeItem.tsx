// TODO: Usar colores de tailwind en los textos

interface AboutCoffeItemProps {
  title: string;
  description: string;
  icon: string;
}

export const AboutCoffeItem = ({
  title,
  description,
  icon,
}: AboutCoffeItemProps) => {
  return (
    <div className="flex  toTable:flex-col">
      <div className="flex-1  toTable:order-2">
        <h3 className="text-right toTable:text-center text-[#120F1F] text-2xl font-bold">
          {title}
        </h3>
        <p className="text-right font-dmSans toTable:text-center">
          {description}
        </p>
      </div>
      <div
        className="w-12 h-12 ml-10 bg-no-repeat bg-contain bg-center toTable:order-1 toTable:mx-auto toTable:w-16 toTable:h-16 my-2"
        style={{
          backgroundImage: `url('${icon}')`,
        }}
      />
    </div>
  );
};
