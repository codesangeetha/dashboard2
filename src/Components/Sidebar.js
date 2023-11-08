import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar-class">
            <div>

            <div className="common-class">
                <Link to="/teacherslist">TeachersList</Link>
            </div>

            <div className="common-class">
                <Link to="/studentslist">StudentsList</Link>
            </div>
            <div className="common-class">
                <Link to="/login">Login</Link>
            </div>
            <div className="common-class">
                <Link to="/map">Map</Link>
            </div>
            <div className="common-class">
                <Link to="/filter">Filter</Link>
            </div>

            <div className="common-class">
                <Link to="/search">Search</Link>
            </div>

            <div className="common-class">
                <Link to="/fetch">Fetch</Link>
            </div>

            <div className="common-class">
                <Link to="/fetch2">Fetch2</Link>
            </div>

            <div className="common-class">
                <Link to="/fetch3">Fetch3</Link>
            </div>
            <div className="common-class">
                <Link to="/apis">Apis</Link>
            </div>
            <div className="common-class">
                <Link to="/tutorial">Tutorial</Link>
            </div>

            <div className="common-class">
                <Link to="/books">Books</Link>
            </div>
            <div className="common-class">
                <Link to="/cars">Cars</Link>
            </div>
            <div className="common-class">
                <Link to="/flowers">Flowers</Link>
            </div>
            <div className="common-class">
                <Link to="/trees">Trees</Link>
            </div>
            <div className="common-class">
                <Link to="/display">Display</Link>
            </div>

            </div>
        </div>
    )
}
