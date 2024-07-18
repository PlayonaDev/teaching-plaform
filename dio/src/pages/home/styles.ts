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

    img {
      max-height: 600px;
      border-radius: 500px;
      border: 1px solid #E41050;
      margin: 0px 0px 0px 15px;
      padding: 15px; 
    }
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFF;
 `

export const TitleHighlight = styled.span`
    color: #E41050;
`

export const TextContent = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  width: 420px;
  margin-bottom: 20px;

  color: #FFFFFF;
`