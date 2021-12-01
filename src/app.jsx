import Routes from "./routes";

function App({FileInput, GetDepartmentData}) {
  return (
    <>
      <Routes
        FileInput={FileInput}
        GetDepartmentData={GetDepartmentData}
      />
    </>
  );
}

export default App;
