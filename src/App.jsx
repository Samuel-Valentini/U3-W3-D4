import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { persistedStore, store } from "./redux/store";
import { Provider } from "react-redux";
import Favorites from "./components/Favorites";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainSearch />} />
                        <Route
                            path="/:company"
                            element={<CompanySearchResults />}
                        />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
