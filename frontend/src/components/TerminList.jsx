import TerminCard from "./TerminCard";

const TerminList = ({ termine }) => {
  return (
    <div className="p-5 grid grid-cols-1 gap-5">
      {termine?.map((termin, index) => {
        return <TerminCard key={index} termin={termin} />;
      })}
    </div>
  );
};

export default TerminList;
