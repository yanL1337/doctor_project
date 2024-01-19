import Rating from "./Rating";

const DocCard = ({ doctor }) => {
  return (
    <div className="card card-side image-full bg-base-300 shadow-xl">
      <figure className="w-full p-10">
        <img
          className="rounded-full w-fit h-fit"
          src={`https://doctorhub.pockethost.io/api/files/${doctor.collectionId}/${doctor.id}/${doctor.avatar}`}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${doctor.title}. ${doctor.username}`}</h2>
        <h3 className="card-title">{doctor.fachgebiet}</h3>
        <Rating rating={doctor.rating} />
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
    // <div className="w-[10.625rem] h-[12.4375rem]">
    //   <div
    //     className="relative w-[10.75rem] h-[12.5rem] -top-px -left-px bg-white rounded-[1.25rem] shadow-[0px_0.625rem_3.75rem_#0000000f]"
    //     style={{ fontSize: "max(1.56vw, 12px)" }}
    //   >
    //     <p className="absolute w-[6.688rem] top-[10.25rem] left-[2.0625rem] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#6a769a] text-[0.625rem] text-center tracking-[0.010625rem] leading-[normal]">
    //       <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#6a769a] text-[0.625rem] tracking-[0.010625rem]">
    //         ⭐️
    //       </span>
    //       <span className="[font-family:'Museo_Sans_Cyrl-Regular',Helvetica]">
    //         {doctor.rating}
    //       </span>
    //     </p>
    //     <div className="absolute w-[4.875rem] h-[5rem] top-[1.375rem] left-[3rem]">
    //       <img
    //         className="absolute h-full w-full top-[0.125rem] left-0"
    //         alt="Image"
    //         src={`https://doctorhub.pockethost.io/api/files/${doctor.collectionId}/${doctor.id}/${doctor.avatar}`}
    //       />
    //       <img
    //         className="absolute w-[1.125rem] h-[1.125rem] top-0 left-[3.4375rem]"
    //         alt="Oval"
    //         src="oval.svg"
    //       />
    //     </div>
    //     <div className="absolute w-[8rem] top-[9.0625rem] left-[1.375rem] [font-family:'Museo_Sans_Cyrl-700',Helvetica] font-normal text-[#6a769a] text-[0.75rem] text-center tracking-[0.0125rem] leading-[normal]">
    //       {doctor.fachgebiet}
    //     </div>
    //     <div className="absolute w-[7.188rem] top-[7.5rem] left-[1.75rem] [font-family:'Museo_Sans_Cyrl-500',Helvetica] font-normal text-[#222b45] text-[1rem] text-center tracking-[0.016875rem] leading-[normal]">
    //       {doctor.username}
    //     </div>
    //   </div>
    // </div>
  );
};

export default DocCard;
