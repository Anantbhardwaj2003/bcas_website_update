function StudentCornerItem(props) {
  var bgcolor = props.bgcolor ? props.bgcolor : "#3B88C3";
  var name = props.name ? props.name : "societies";
  var img = props.img ? props.img : "https://via.placeholder.com/184x184";
  var imgMaxSize = props.imgMaxSize ? "w-full" : "";
  return (
    <a className="student-corner-item" href="/">
      <div
        className="image-container"
        // style={{
        //   backgroundColor: bgcolor,
        // }}
      >
        <img src={img} className={imgMaxSize} />
      </div>
      <div className="text">{name}</div>
    </a>
  );
}

export default StudentCornerItem;
