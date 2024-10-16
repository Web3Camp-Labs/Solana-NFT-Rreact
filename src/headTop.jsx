import React from "react";
import styled from "styled-components";
import { Container, Row, Col} from 'react-bootstrap';
import LogoImg from "./assets/web3camp.png";

const ContainerBox = styled(Container)`
    display: flex;
  .logo{
    margin-right: 20px;
  }
`


export default function HeaderTop() {



    return <div className="header">
        <ContainerBox>
            <Row>
                <Col className="headerTxt" md={12}>
                    <a href="https://web3camp.us" target="_blank" rel="noreferrer">
                        <img src={LogoImg} alt=""/>
                    </a>
                </Col>

            </Row>
        </ContainerBox>
    </div>
}
