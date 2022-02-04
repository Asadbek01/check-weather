import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import {MainSearch } from '../types/interface';
import Details from './Details';
export const MainHome = () => {
   

    const [weather, setWeather] = useState<MainSearch[]>([])
    const [country, setCountry] = useState('')

    // const keyNumber = process.env.REACT_APP_API_  
    // console.log(keyNumber)
    
    const getData = async()=>{
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=54baed561dc6416c02fd619c70a96bb1`)
          if (response.ok){
              const data = await response.json() 
              console.log(data)
              setWeather(data)
          } 
        } catch (error) {
    
        }
    }


    return <>
        <Container>
            <Row className="d-none d-sm-block">
                <Form
                    className="animate__animated animate__fadeInDown"
                    onSubmit={async (e) => {
                        e.preventDefault();
                    }}
                >
                    <Row className="mt-5">
                        <Col
                            sm={{ offset: 1, span: 5 }}
                            md={{ offset: 2, span: 4 }}
                            lg={{ offset: 2, span: 4 }}
                            xl={{ offset: 3, span: 3 }}
                            className="mb-3 p-0"
                        >
                            <Form.Group
                                controlId="exampleForm.ControlInput1"
                                style={{ width: "90%" }}
                            >
                                <Form.Control
                                    type="search"
                                    placeholder="Insert here your city"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                        <Button
                         style={{
                            minWidth: "20%",
                            maxWidth: "100%",
                          }}
                          variant="outline-success"
                          onClick={()=> getData()}
                        >Search</Button>
                        </Col>
                        <Col xs={10}>
                        {
                    //   weather.map((data) => {
                    //       p
                      
                        }
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    </>;



};
