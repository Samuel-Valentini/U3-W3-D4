import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { REMOVE_FROM_FAVORITES } from "../redux/actions";

const Favorites = () => {
    const dispatch = useDispatch();
    const arrayOfFavorites = useSelector((curr) => curr.favorite.companies);
    console.log(arrayOfFavorites);
    return (
        <div>
            <div className="w-50 mx-auto ">
                <Link to={"/"} className="text-danger">
                    Go to Home
                </Link>
            </div>
            <h1 className="text-danger text-center">Favorites</h1>
            {[...new Set(arrayOfFavorites)].map((company) => {
                return (
                    <div
                        key={company}
                        className="d-flex justify-content-between w-50 mx-auto my-2">
                        <h3>
                            <Link to={`/${company}`}>{company}</Link>
                        </h3>
                        <Button
                            onClick={() => {
                                dispatch({
                                    type: REMOVE_FROM_FAVORITES,
                                    payload: company,
                                });
                            }}>
                            Remove
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};
export default Favorites;
