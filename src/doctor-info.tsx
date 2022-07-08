import { ButtonGroup, Button } from "@mui/material";
import { DoctorDetails } from "components/doctor-details";

export function DoctorInfo(){
    return (
        <><DoctorDetails />
        <ButtonGroup variant="contained"
          aria-label="outlined primary button group">
            <Button>Info</Button>
            <Button>Experience</Button>
            <Button>Review</Button>
            <Button>Get Appointment</Button>
        </ButtonGroup>
        </>
    );
}