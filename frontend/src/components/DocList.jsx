import DocCard from "./DocCard";

const DocList = ({ doctors }) => {
  return (
    <section className="grid gap-5 grid-cols-1">
      {doctors?.map((doc, key) => {
        return <DocCard doctor={doc} key={key} />;
      })}
    </section>
  );
};

export default DocList;
