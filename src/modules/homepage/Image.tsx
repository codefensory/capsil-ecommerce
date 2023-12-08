import cafeImage from "./capsilbag.png";
import NextImage from "next/image";
export const Image = () => {
  return (
    <div className="relative w-[220px] h-[340px] xl:w-96  xl:h-[600px]">
      <NextImage
        src={cafeImage}
        alt=""
        sizes="500px"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Image;
