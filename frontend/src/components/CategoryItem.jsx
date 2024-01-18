const CategoryItem = ({ path, text }) => {
  return (
    <div className="w-[7.125rem] h-[8.3125rem] overflow-hidden">
      <div className="relative w-[7.25rem] h-[8.4375rem] -top-px -left-px bg-[#6a769a0d] rounded-[1.25rem]">
        <div className="absolute w-[5.375rem] top-[6.5625rem] left-[0.9375rem] font-family:'Museo_Sans_Cyrl-500',Helvetica font-normal text-[#6a769a] text-[0.625rem] text-center tracking-[0.010625rem] leading-[normal]">
          2,029 Doctors
        </div>
        <img
          className="absolute w-[2.3125rem] h-[2.375rem] top-[1.375rem] left-[2.5rem]"
          alt="Brain icon"
          src={path}
        />
        <div className="absolute w-[4.8125rem] top-[5.0625rem] left-[1.25rem] font-family:'Museo_Sans_Cyrl-500',Helvetica font-normal text-primary text-[0.9375rem] text-center tracking-[0.015625rem] leading-[normal]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
