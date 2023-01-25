import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import Backpack from "../Pages/backpack";
import One from "../Pages/One";
import Snakefish from "../Pages/snakefish";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/backpack" element={<Backpack />}/>
            <Route path="/one" element={<One />}/>
            <Route path="/snakefish" element={<Snakefish />}/>
            <Route
                path="*"
                element={<Navigate to = "/home" replace />}
            />
        </Routes>
    );
};

export default AppRouter;