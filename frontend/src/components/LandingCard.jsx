const LandingCard = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Health Care</h1>
          <p className="mb-5">
            Book your next appointment and get healthy soon. Please be kind and
            not mean.
          </p>
          <button className="btn btn-secondary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
