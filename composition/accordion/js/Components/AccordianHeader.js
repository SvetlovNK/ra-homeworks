const AccordianHeader = ({children}) => {
  return (
    <div className="sectionhead">
      <button>toggle</button>
      {children}
    </div>
  );
};