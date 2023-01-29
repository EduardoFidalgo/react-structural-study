import Base from "pages/Base";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="Favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;