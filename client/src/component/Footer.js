import React from 'react'
import styled from 'styled-components';


const FooterContainer = styled.div`
  height: 100px;
  width: 1100px;
  background-color: #f8f8f8; 
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <hr />
      <br />
      <div>프론트엔드 : 백승찬, 임지현 백엔드 : 정현호. 이미래 </div>
      <div>2023년 7월 2일 (월) ~ 2023년 7월 13일</div>
    </FooterContainer>
  )
}
