import React, { useState, useEffect } from 'react';
import 'core-js/stable';
import 'regenerator-runtime';
import styled from 'styled-components';

const App = () => {
  const [gifData, setGifData] = useState([]);
  const [isGifDataLoading, setIsGifDataLoading] = useState(false);
  //   const uri =
  //     'https://api.giphy.com/v1/gifs/trending?api_key=OhokD3sYb24zaFFpUiO90QSMR7nanYQs&limit=25&rating=r';
  const uri = 'https://yts-proxy.now.sh/list_movies.json?minimum_rating=9';
  //   const getFetch = async () => {
  //     const getData = await fetch(uri);
  //     const makeJson = await getData.json();
  //     setGifData(makeJson);
  //   };
  async function getFetch() {
    const getData = await fetch(uri);
    const makeJson = await getData.json();
    setGifData(makeJson);
  }
  useEffect(() => {
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaa');
    getFetch();
  }, []);

  return (
    <>
      <div>hi</div>
    </>
  );
};
export default App;
