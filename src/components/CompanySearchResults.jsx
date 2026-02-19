import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionSearch } from "../redux/actions";

const CompanySearchResults = () => {
    // const [jobs, setJobs] = useState([]);
    const jobs = useSelector((currentState) => {
        return currentState.result.data;
    });
    const params = useParams();
    const dispatch = useDispatch();

    const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?company=";

    useEffect(() => {
        getJobs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getJobs = async () => {
        try {
            const response = await fetch(baseEndpoint + params.company);
            if (response.ok) {
                const { data } = await response.json();
                dispatch(actionSearch(data));
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <div className=" mx-auto ">
                <Link to={"/"} className="text-danger">
                    Go to Home
                </Link>
            </div>
            <Row>
                <Col className="my-3">
                    <h1 className="display-4">
                        Job posting for: {params.company}
                    </h1>
                    {jobs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default CompanySearchResults;
