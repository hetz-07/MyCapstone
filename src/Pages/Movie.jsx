import React from "react";
import { Link, } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function Movie() {

    return (
        <>
            <Row>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Comedy.jpg"
                                class="card-img-top"
                                alt="..."
                              
                            />
                            <div class="card-body">
                                <h5 class="card-title">Comedy</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Mystery.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Mystery</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Drama.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Drama</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>

                </Col>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Fantasy.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Fantasy</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
               
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Thriller.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Thriller</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
</Col>
            </Row>
            <Row>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Romance.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Romance</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Action.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Action</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Sci-fi.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Sci-Fi</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row>
                <Col>
                </Col>
                <Col>
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Crime.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Crime</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
               
                    <Link to='/comedy'>
                        <div class="card">
                            <img src="./images/Horror.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <h5 class="card-title">Horror</h5>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                </Col>
            </Row>
        </>
    );
}