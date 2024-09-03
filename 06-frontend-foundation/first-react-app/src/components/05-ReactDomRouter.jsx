import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import FirstComponent from "./00-FirstComponent";
import WrapperComponent from "./01-WrapperComponent";

const ReactHooks = lazy(()=> import("./03-ReactHooks"))

export default function RouterApp() {

    return (
        <BrowserRouter>
            <AppBar />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/firstcomponent" element={<FirstComponent />} />
                <Route path="/wrappercomponent" element={<WrapperComponent />} />
                <Route path="/lazyhookcomponent" element={<Suspense fallback={"Loading..."}><ReactHooks/></Suspense>} />
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

function NotFoundComponent() {

    return (
        <h1>404 page not found</h1>
    )
}

function HomeComponent() {
    return (
        <>
            <p>This is the home react component click on buttons to switch between tabs</p>
        </>
    )
}

function AppBar() {
    const navigate = useNavigate();
    function navigateRoute(path) {
        navigate(path)
    }
    return (
        <div>
            <button onClick={() => navigateRoute('/firstcomponent')}>Counter Component</button>
            <button onClick={() => navigateRoute('/wrappercomponent')}>WrapperComponent</button>
            <button onClick={()=>navigateRoute("./lazyhookcomponent")}>Lazy Hook component</button>
        </div>
    )
}