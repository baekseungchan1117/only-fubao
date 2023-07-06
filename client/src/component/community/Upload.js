import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  UploadDiv,
  UploadForm,
  UploadButtonDiv,
} from '../../Style/UploadCSS.';

export default function Upload() {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');

  let navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Title === '' || Content === '') {
      return alert('모든 항목을 채워주세요');
    }

    let body = {
      title: Title,
      content: Content,
    };
    console.log(body.title);

    axios
      .post('http://localhost:8000/community/lounge', body)
      .then((response) => {
          alert('작성 성공');
          console.log(response);
          window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Submit
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}
