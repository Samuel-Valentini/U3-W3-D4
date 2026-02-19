import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { actionSearch, getActionSearch } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
    const [query, setQuery] = useState("");

    const jobs = useSelector((currentState) => {
        return currentState.result.data;
    });

    const dispatch = useDispatch();

    const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        dispatch(getActionSearch(query));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(getActionSearch(query));
    };

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <div>
                        <Link to={"/favorites"}>Go to Favorites</Link>
                    </div>
                    <h1 className="display-1">Remote Jobs Search</h1>
                </Col>
                <Col xs={10} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            value={query}
                            onChange={handleChange}
                            placeholder="type and press Enter"
                        />
                    </Form>
                </Col>
                <Col xs={10} className="mx-auto mb-5">
                    {jobs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default MainSearch;
