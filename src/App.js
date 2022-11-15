import React from 'react'
import { useEffect, useState } from 'react';
import { ListGenerate } from './component/listGenerate/listGenerate';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobDetails from './component/jobDetails/jobDetails'
const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataOnePost, setDataOnePost] = useState([]);
  const [id, setId] = useState("635ee6d3481a45504d69a9e0");

  const onRequest = () => {
    const _apiBase = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/'
    const _accessToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

    const url = `${_apiBase}data?access_token=${_accessToken}`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((dataFetch) => {
        setData(dataFetch);
        if (id !== '') {
          const result = dataFetch.find(item => item.id === id);
          setDataOnePost(result);
        }
        setLoading(false);
      })
  }

  useEffect(() => {
    onRequest();
  }, []);

  const infoAboutJobResult = async (id) => {
    setId(id);
  }
  if (loading) {
    return <h1>Loading ...</h1>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListGenerate data={data} />}></Route>
        <Route path={'/jobDetailed/:idPostOne'} element={<JobDetails key={id} infoAboutJobResult={infoAboutJobResult} data={dataOnePost} loading={loading} />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
