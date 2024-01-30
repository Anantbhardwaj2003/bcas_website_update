import React from "react";
import "./Gallery.css";

export const Gallery = () => {
    return (
        <div className="gallery">
            <div className="title">GALLERY</div>
            <div className="achivement-container">
                <div className="achivement">
                    <img src="https://buffer.com/cdn-cgi/image/w=360,fit=contain,q=100,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" />
                    <p>ACHIEVEMENT 1</p>
                </div>
                <div className="achivement">
                    <img src="https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p>ACHIEVEMENT 2</p>
                </div>
                <div className="achivement">
                    <img src="https://images.unsplash.com/photo-1699694927074-cb6a828dd255?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p>ACHIEVEMENT 3</p>
                </div>
            </div>
        </div>
    );
};
export default Gallery;