import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function RankingImage() {
  const [postInfo, setPostInfo] = useState([]);
  const [flag, setFlag] = useState(false);
  const params = useParams();
  console.log("fds", params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/community/detail/rankingimage');
        setPostInfo(response.data.data);
        setFlag(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log("postInfo:", postInfo);

  return (
    <div>
      {flag ? (
        <>
          {postInfo.map((info, index) => (
            <div key={index}>
              <img src={info.img} alt="" style={{ width: "10%", height: "10" }} />
              <div>{info.title}</div>
              <div>{info.content}</div>
              <div>{info.nickname}</div>
              <br />
            </div>
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
