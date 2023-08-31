import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HeatIndex = () => {
    useEffect(() => {
        document.title = "Тепло";
    }, []);
    return (
        <>
            <Outlet />
        </>
    );
};

export default HeatIndex;
