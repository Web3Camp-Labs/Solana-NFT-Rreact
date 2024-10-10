import Spinner from 'react-bootstrap/Spinner';
import styled from "styled-components";

const Box = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    background: rgba(0,0,0,0.3);
    left: 0;
    top: 0;
    z-index: 99;
    backdrop-filter: blur(3px);
`

export default function Loading() {
    return <Box>
        <Spinner animation="border" role="status" variant="primary" size="lg" />
    </Box>
}
