import { Link } from "react-router-dom";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row className='justify-content-md-center hero'>
        <Col lg={8}>
          <Row className='justify-content-md-center'>
            <center>
              <h2>My Thailand Travel Level</h2>
            </center>
          </Row>
          <p>
            <center>
              A simple web app that helps you visualize how well-travelled you
              are in Thailand
            </center>
          </p>
          <br />
          <Row className='justify-content-md-center'>
            <Link className='bn632-hover bn26' to={"/map"}>
              <Button className='bn632-hover bn21' size='lg'>
                Let's Play!
              </Button>
            </Link>{" "}
          </Row>
          <br />
        </Col>
      </Row>
      <br />
      <Row className='justify-content-md-center'>
        <Col lg={8}>
          <Row>
            <h4>How To Play</h4>
            <p>
              The map is divided into the 77 Thai provinces. All you have to do
              is to click on a province and choose the appropriate level of
              travel.
            </p>
          </Row>
          <Row>
            <p>
              <strong>Here's what each level represents:</strong>
            </p>
          </Row>
          <Row className='justify-content-md-center'>
            <Col lg={8}>
              <Table responsive>
                <tbody>
                  <tr className='red-row'>
                    <td>
                      <b>Lived there</b>
                    </td>
                    <td>
                      You spent a significant portion of your life in that area
                    </td>
                  </tr>
                  <tr className='orange-row'>
                    <td>
                      <b>Stayed there</b>
                    </td>
                    <td>You slept at least a night in that area</td>
                  </tr>
                  <tr className='yellow-row'>
                    <td>
                      <b>Visited there</b>
                    </td>
                    <td>You spent some hours exploring the area</td>
                  </tr>
                  <tr className='green-row'>
                    <td>
                      <b>Alighted there</b>
                    </td>
                    <td>
                      You just dropped off for a short stopover, layover, or
                      transfer
                    </td>
                  </tr>
                  <tr className='blue-row'>
                    <td>
                      <b>Passed there</b>
                    </td>
                    <td>You passed by that area but did not set foot</td>
                  </tr>
                  <tr className='white-row'>
                    <td>
                      <b>Never been there</b>
                    </td>
                    <td>You need to travel there soon</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

          <Row>
            <p>
              Your total score will be updated accordingly. You can then save
              the image and share on your social media. Enjoy!
            </p>
          </Row>
          <br />
          <br />
          <Row>
            <h4>About the project</h4>
            <p>
              This project is a clone from this{" "}
              <a
                href='https://github.com/denzdelvillar/philippine-map-app'
                target='_blank'
                rel='noreferrer'
              >
                Github project↗
              </a>
              <nbsp></nbsp>
              and was inspired by the{" "}
              <a href='https://zhung.com.tw/japanex/'>Japan↗</a> version
            </p>
          </Row>
          <br />
          <br />
          <Row>
            <center>
              <p>
                <i>Crafted by Junerey</i>
              </p>
              <p>
                <a
                  href='https://www.linkedin.com/in/junereycasuga/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href='https://github.com/junereycasuga/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>{" "}
                |{" "}
                <a
                  href='https://instagram.com/junereyshoots/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Instagram
                </a>
              </p>
            </center>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
