import { social } from "../Components/Maps";
import Icons from "./Icons";

const Social = () => {
  return (
    <div className="flex gap-3 flex-col cursor-pointer w-[20%] absolute right-[6%] bottom-5">
      {social.map((icon) => (
        <Icons key={icon.id} {...icon} style={icon.style} />
      ))}
    </div>
  );
};

export default Social;
