// eslint-disable-next-line react/prop-types
const Icons = ({ icons, style, links }) => {
  return (
    <div className={`${style} flex w-[100%] justify-end place-items-center`}>
      <a href={links} className="flex place-items-center w-[20%]">
        <span className="flex justify-center py-[11px] rounded-full">
          {" "}
          <img src={icons} className="w-[50%]" alt="" />
        </span>
      </a>
    </div>
  );
};

export default Icons;
