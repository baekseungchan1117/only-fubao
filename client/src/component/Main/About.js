import React from 'react'
import styled from 'styled-components';

const  AboutContainer = styled.div`
  height: 600px; 
  width: 1100px;
  margin: 0 auto;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('/images/fuobao.jpeg');
  background-size: cover;
  color : white ;
`;

export default function About() {
    return (
        <>
        <AboutContainer>
            <div>
                <div>푸바오 (福宝)</div>
                <div>2020. 07. 20 한국 에버랜드 출생. 한국에서 태어난 첫 번째 판다 타이틀 보유.</div>
                <div>성별 : 여(암컷)</div>
                <div>부모 : 아이바오(엄마), 러바오(아빠)</div>
                <div>몸무게 : 50kg 이상</div>
                <div>사육사 : 강철원 사육사</div>
            </div>
        </AboutContainer>
        </>
      )
}
