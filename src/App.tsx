import { DoctorDetails } from "components/doctor-details";
import { DoctorInfo } from "doctor-info";
import { DoctorListUI } from "doctor-list";
import { SpecialitiesUI } from "specialities";

function F2({ var1, var2, children }) {
  return (
    <div>
      from f1 value1: {var1} value2: {var2}
      {children}
    </div>
  );
}

function App() {
  //return <SpecialitiesUI />;
  //return <DoctorListUI />;
  //return <DoctorDetails />;
  return <DoctorInfo />;
}

export default App;
