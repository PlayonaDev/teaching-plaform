import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
 width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
 max-width: 300px;
`

export const Column = styled.div`
 flex: 1;
`
export const Row = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-top: 20px;
`

export const Title = styled.h2`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 700;
 font-size: 32px;
 width: 320px;
 margin-bottom: 20px;
 line-height: 44px;

 color: #FFFFFF;
`
export const TitleRegister = styled.p`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 700;
 font-size: 32px;
 width: 320px;
 margin-bottom: 20px;
 line-height: 44px;
`
export const SubtitleRegister = styled.p`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 300;
 font-size: 15px;
 margin-bottom: 35px;
 line-height: 25px;
`

export const TextPolicy = styled.p`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 300;
 font-size: 15px;
 line-height: 25px;
`

export const TextSignIn = styled.p`
 font-family: 'Open Sans';
 font-style: normal;
 font-weight: 300;
 font-size: 13px;
 line-height: 25px;
`

export const SignIn = styled(Link)`
font-family: 'Open Sans';
 font-style: normal;
 font-weight: 600;
 font-size: 13px;
 line-height: 25px;

 color: #23DD7A;
`
