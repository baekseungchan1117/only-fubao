import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 550px;
  width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 50%;
  background: rgba(0,0,0,0.8)
`;

const Map = () => {
  
 
useEffect(() => {
    
   
const container = document.getElementById('map');
    
   
const options = {
      
     
center: new window.kakao.maps.LatLng(37.293014, 127.202828),
      level: 3,
      mapTypeId: window.kakao.maps.MapTypeId.DARK
    };
    const map = new window.kakao.maps.Map(container, options);

    const markerPositions = [
      { lat: 37.293014, lng: 127.202828 },
      // Add more marker positions here
      // { lat: ..., lng: ... },
      // { lat: ..., lng: ... },
    ];

    markerPositions.forEach((position) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(position.lat, position.lng)
      });
      marker.setMap(map);

      window.kakao.maps.event.addListener(marker, 'click', () => {
        const infoWindow = new window.kakao.maps.InfoWindow({
          content: '푸바오 집' 
        });
        infoWindow.open(map, marker);
      });
    });
  }, []);

  return (
    <MapContainer>
      <div style={{ display: "flex" }}>
        <div id="map" style={{ width: '50%', height: '550px' }}></div>
        <DetailContainer>
          <div>오시는 길 소개 내용</div>
        </DetailContainer>
      </div>
    </MapContainer>
  );
};

export default Map;
