import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive";
//2:46:28
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`

    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: "40px"})}

`;
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({fontSize:"18px",textAlign:"center"})}

`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`;
//  1:16
const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get Timely Updates From your Favourite Products</Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter
