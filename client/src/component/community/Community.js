import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import FubaoMovie from "./FubaoMovie";
import List from "./List";
import Upload from "./Upload";

const CommunityContainer = styled.div`
  height: 1000px; 
  width: 1100px;
  margin: 0 auto;
`;

const Communitysection = styled.div`
  height: 100%; 
  width: 100%;
  margin: 0 auto;
  overflow: scroll;
`;

const CommunityNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

export default function Community() {
  const [homeVisible, setHomeVisible] = useState(true);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [movieVisible, setMovieVisible] = useState(false);

  const handleHomeClick = () => {
    setHomeVisible(true);
    setUploadVisible(false);
    setMovieVisible(false);
  };

  const handleUploadClick = () => {
    setHomeVisible(false);
    setUploadVisible(true);
    setMovieVisible(false);
  };

  const handleMovieClick = () => {
    setHomeVisible(false);
    setUploadVisible(false);
    setMovieVisible(true);
  };

  return (
    <>
    <CommunityContainer>
    <CommunityNav>
      <Link onClick={handleHomeClick}>LIST</Link>
      <Link onClick={handleUploadClick}>UPLOAD</Link>
      <Link onClick={handleMovieClick}>MOVIE</Link>
    </CommunityNav>

    <Communitysection>
      {homeVisible && <List />}
      {uploadVisible && <Upload />}
      {movieVisible && <FubaoMovie />}
    </Communitysection> 
    </CommunityContainer>
    </>
  )
}
