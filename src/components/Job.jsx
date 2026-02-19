import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    actionAddToFavorite,
    actionRemoveFromFavorites,
} from "../redux/actions";

const Job = ({ data }) => {
    const dispatch = useDispatch();
    const arrayOfFavorites = useSelector((curr) => curr.favorite.companies);
    const isFavorite = arrayOfFavorites.includes(data.company_name);

    return (
        <>
            <Row
                className={`mx-0 mt-3 p-3 ${isFavorite ? "bg-warning" : ""}`}
                style={{ border: "1px solid #00000033", borderRadius: 4 }}>
                <Col xs={3}>
                    <Link to={`/${data.company_name}`}>
                        {data.company_name}
                    </Link>
                </Col>
                <Col xs={7}>
                    <a href={data.url} target="_blank" rel="noreferrer">
                        {data.title}
                    </a>
                </Col>
                <Col className="text-center">
                    <Button
                        variant="info"
                        className="text-white mb-1"
                        onClick={() => {
                            dispatch(actionAddToFavorite(data.company_name));
                        }}>
                        Aggiungi ai preferiti
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            dispatch(
                                actionRemoveFromFavorites(data.company_name),
                            );
                        }}>
                        Rimuovi dai preferiti
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default Job;
