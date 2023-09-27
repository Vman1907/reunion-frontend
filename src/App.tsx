import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./config/const";
import Home from "./views/pages/home";
import Login from "./views/pages/login";
import Product from "./views/pages/product";
import Signup from "./views/pages/signup";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.SIGNUP} element={<Signup />} />
                    <Route path={ROUTES.PRODUCT} element={<Product />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;

