import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import InnerContent from "../Components/InnerContent";
import TeachersList from "../Components/TeachersList";
import StudentsList from "../Components/StudentsList";
import Login from "../Components/Login";
import Map from "../Components/Map";
import Filter from "../Components/Filter";
import Search from "../Components/Search";
import Fetch from "../Components/Fetch";
import Fetch2 from "../Components/Fetch2";
import Fetch3 from "../Components/Fetch3";
import Apis from "../Components/Apis";
import Tutorial from "../Components/Tutorial";
import Books from "../Components/Books";
import Cars from "../Components/Cars";
import Flowers from "../Components/Flowers";
import Trees from "../Components/Trees";
import Display from "../Components/Display";


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InnerContent />} >
                <Route path="/" element={<Navigate replace to="teacherslist" />} />
                <Route path="teacherslist" element={<TeachersList />} />
                <Route path="studentslist" element={<StudentsList />} />
                <Route path="login" element={<Login />} />
                <Route path="map" element={<Map />} />
                <Route path="filter" element={<Filter />} />
                <Route path="search" element={<Search />} />
                <Route path="fetch" element={<Fetch />} />
                <Route path="fetch2" element={<Fetch2 />} />
                <Route path="fetch3" element={<Fetch3 />} />
                <Route path="apis" element={<Apis />} />
                <Route path="tutorial" element={<Tutorial />} />
                <Route path="books" element={<Books />} />
                <Route path="cars" element={<Cars />} />
                <Route path="flowers" element={<Flowers />} />
                <Route path="trees" element={<Trees />} />
                <Route path="display" element={<Display />} />
            </Route>
        </Routes>
    )
}