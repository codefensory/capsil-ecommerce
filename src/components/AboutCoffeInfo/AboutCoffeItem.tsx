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
    <div className="flex">
      <div className="flex-1">
        <h3 className="text-right text-[#120F1F] text-2xl font-bold">
          {title}
        </h3>
        <p className="text-right font-dmSans">{description}</p>
      </div>
      <div
        className="w-12 h-12 ml-10 bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: `url('${icon}')`,
        }}
      ></div>
    </div>
  );
};
