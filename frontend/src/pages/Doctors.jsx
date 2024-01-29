import DocList from "../components/DocList";

const Doctors = ({ docs }) => {
  return (
    <section className="p-5 ">
      <DocList doctors={docs} />
    </section>
  );
};

export default Doctors;
