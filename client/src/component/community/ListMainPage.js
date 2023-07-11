import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';
import styled from "@emotion/styled";

const SortDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  gap: 10px;
`;

export default function ListMainPage() {
    const [postList, setPostList] = useState([]);
    const [sort, setSort] = useState("");
    const [searchtitle, setSearchTitle] = useState("")

    const getPostList = () => {
        const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:8000/community', {
                params: { 
                  sort: sort,
                  searchtitle : searchtitle
                }
              });
              console.log("res", response);
              setPostList(response.data.data);
            } catch (error) {
              console.log(error);
            }
          };
      
          fetchData();
    }

    useEffect(() => {
        getPostList();
    }, [sort]);


    const SearchHandler = () => {
        getPostList();
    }  
    return (
      <div>
        <SortDiv>
          <div onClick={() => setSort("최신순")}>최신순</div>
          <div onClick={() => setSort("인기순")}>인기순</div>
          <input type="text" value={searchtitle} 
          onChange ={(e) => setSearchTitle(e.currentTarget.value)}
          onKeyDown ={(e) => {
            if(e.keyCode === 13) SearchHandler();
          }}
          />
        </SortDiv>
        <List postList={postList} />
      </div>
    );
  }
  