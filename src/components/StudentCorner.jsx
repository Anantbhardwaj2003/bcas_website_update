import StudentCornerItem from "./StudentCornerItem";
import "./StudentCorner.css";
import societies from "../assets/societies.png";
import alumni from "../assets/alumni.png";
import sports from "../assets/sports.png";
import achivements from "../assets/achivements.png";
import eca from "../assets/eca.png";
import scholarships from "../assets/scholarships.png";
import internships from "../assets/internships.png";
import attendance from "../assets/attendance.png";
import internalAssesment from "../assets/internal_assesment.png";
import fee from "../assets/fee.png";

function StudentCorner(props) {
  return (
    <div className="student-corner">
      {/* <div className="student-corner-title">student corner</div> */}
      <div className="student-corner-items-container">
        <StudentCornerItem bgcolor="#3B88C3" name="societies" img={societies} />
        <StudentCornerItem bgcolor="#3B88C3" name="alumni" img={alumni} imgMaxSize />
        <StudentCornerItem
          bgcolor="rgba(255, 219, 94, 0.66)"
          name="sports"
          img={sports}
        />
        <StudentCornerItem
          bgcolor="rgba(221, 46, 68, 0.81)"
          name="achievements"
          img={achivements}
        />
        <StudentCornerItem bgcolor="#FFDB5E" name="eca" img={eca} />
        <StudentCornerItem
          bgcolor="#479C88"
          name="scholarships"
          img={scholarships}
        />
        <StudentCornerItem
          bgcolor="#7692BB"
          name="internships"
          img={internships}
        />
        <StudentCornerItem
          bgcolor="#7B6D8D"
          name="attendance"
          img={attendance}
        />
        <StudentCornerItem
          bgcolor="#AD7369"
          name="internal assesment"
          img={internalAssesment}
        />
        <StudentCornerItem bgcolor="#479C88" name="fee" img={fee} />
      </div>
    </div>
  );
}

export default StudentCorner;
