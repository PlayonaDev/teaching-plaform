import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  max-width: 90%;
  height: 47px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

   img {
   width: 50px;
   height: 50px;
   border-radius: 50px;
   box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

   &:hover {
    background: #E4105040;
    cursor:pointer;
    border-radius: 50px;
   }
  };
  `;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
 background-color: #151515;
 width: 100%;
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const BuscarInputContainer = styled.div`
 width: 175px;
 height: 40px;
 background: #2D2D37;
 border-radius: 8px;
 padding: 2px 5px;
 margin: 0 12px;
 box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

 display: flex;
 align-items: center;
 justify-content: center;
`;

export const Menu = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 13px;
  line-height: 25px;
  color: #FFFF;
  margin-right: 12px;
  text-decoration: none;
`;

export const MenuRight = styled.a`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 13px;
  line-height: 25px;
  color: #FFFF;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
 width: 45px;
 height: 45px;
 border-radius: 22px;
 border: 2px solid #FFFFFF;
 margin-right: 20px;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #FFFFFF;
  height: 100%;
`;