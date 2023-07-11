import React,{useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostDiv, Post, BtnDiv } from '../../Style/PostDetailCSS'; // Import the necessary CSS styles

export default function Detail(props) {
  const { postNum } = useParams();
  const navigate = useNavigate();
  const [Flag, setFlag] = useState(false)
  const user = useSelector((state) => state.user);
  console.log("userdddd", user);

  const deleteHandle = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const fetchData = async () => {
        try {
          const response = await axios.delete(`http://localhost:8000/community/lounge/${postNum}`);
          console.log(response);
          if (response.status === 200) {
            alert("게시글이 삭제되었습니다.");
            navigate('/community');
          }
        } catch (err) {
          alert("게시글이 삭제되었습니다.");
        }
      };

      fetchData();
    }
  };

  return (
    <div>
      <PostDiv>
        <>
          <Post>
            <h1>{props.postInfo.title}</h1>
            <h1>{props.postInfo.nickname}</h1>
            {props.postInfo.img ? (
              <img src={props.postInfo.img} alt="" style={{ width: "100%", height: "auto" }} />
            ) : null}
            <p>{props.postInfo.content}</p>
          </Post>
          {props.postInfo.nickname === JSON.parse(localStorage.getItem('login'))?.nickname && (
            <BtnDiv>
              <Link to={`/edit/${postNum}`}>
                <button className="edit">UPDATE</button>
              </Link>
              <button className="delete" onClick={deleteHandle}>
                DELETE
              </button>
            </BtnDiv>
          )}
        </>
      </PostDiv>
    </div>
  );
}
