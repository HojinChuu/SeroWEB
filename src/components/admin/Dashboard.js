import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Legend,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    {
      name: "A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <Container fluid className="dashboard">
        <Row className="mt-4">
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5" className="align-self-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-eye fa-3x"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">총 조회수</p>
                      <Card.Title as="h4">120K</Card.Title>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  새로고침
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5" className="align-self-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-shopping-cart fa-3x"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">총 판매량</p>
                      <Card.Title as="h4">1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  새로고침
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5" className="align-self-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-users fa-3x"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">유저</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  새로고침
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5" className="align-self-center">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-comments fa-3x"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">문의</p>
                      <Card.Title as="h4">+45</Card.Title>
                    </div>
                  </Col>
                </Row>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  새로고침
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12">
            <Card>
              <div className="pl-4 pt-4">
                <Card.Title as="h4">XXXX Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </div>

              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                      width={500}
                      height={300}
                      data={data02}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock mr-1"></i>
                  2021-xx-xx 기준 데이터
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12">
            <Card>
              <div className="pl-4 pt-4">
                <Card.Title as="h4">XXXX Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </div>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock mr-1"></i>
                  2021-xx-xx 기준 데이터
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4 mb-5">
          <Col md="6">
            <Card>
              <div className="pl-4 pt-4">
                <Card.Title as="h4">XXXX Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </div>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart width={500} height={400}>
                      <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock mr-1"></i>
                  2021-xx-xx 기준 데이터
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <div className="pl-4 pt-4">
                <Card.Title as="h4">XXXX Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </div>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock mr-1"></i>
                  2021-xx-xx 기준 데이터
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
