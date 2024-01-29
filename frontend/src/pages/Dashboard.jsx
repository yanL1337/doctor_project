import TerminList from "../components/TerminList";

const Dashboard = ({ termine }) => {
  return (
    <div>
      <h1 className="w-fit m-auto">Dashboard</h1>
      <TerminList termine={termine} />
    </div>
  );
};

export default Dashboard;
