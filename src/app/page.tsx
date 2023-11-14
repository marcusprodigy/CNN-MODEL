"use client";
import React, { useEffect, useState } from "react";

const dados = [
  "TopStories",
  "Local",
  "COVID",
  "Opinion",
  "World",
  "Canada",
  "Politics",
  "Indigenous",
  "Business",
];

const gapi = {
  url: [
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/WhatsApp-Image-2023-11-14-at-08.44.20-1.jpeg?w=420&h=240&crop=1",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/ballots-1195065.jpg?w=420&h=240&crop=1",
    "https://img.youtube.com/vi/g3RhQMd6F3k/sddefault.jpg",
    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/53301036641_5609750f73_o-1-e1699362635987.jpg?w=420&h=240&crop=1",
  ],
  titulo: [
    "Operação investiga fraude de R$ 451 mi em sistema ",
    "Câmara resiste e deixa em risco MP das Subvenções...",
    "À CNN, ministro diz que encontrará aéreas para discutir...",
    "Botafogo confirma demissão do técnico interino...",
  ],
  descricao: [
    "Operação investiga fraude de R$ 451 mi em sistema ",
    "Câmara resiste e deixa em risco MP das Subvenções...",
    "À CNN, ministro diz que encontrará aéreas para discutir...",
    "Botafogo confirma demissão do técnico interino...",
  ],
};

export default function Home() {
  return (
    <main className="bg-white h-screen w-screen relative overflow-y-scroll ">
      <header className="w-full h-24 flex mb-2 px-5 fixed items-center bg-white ">
        <div className="w-1/2 h-10 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/CBC_logo.svg/1200px-CBC_logo.svg.png"
            alt="logo"
            className="h-full"
          />
        </div>
        <div className="w-1/2 h-10 flex justify-end">
          <div className=" self-center h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 50 50"
              className="fill-red-600"
            >
              <path d="M 21 4 C 11.082241 4 3 12.082241 3 22 C 3 31.917759 11.082241 40 21 40 C 24.62177 40 27.99231 38.91393 30.820312 37.0625 L 43.378906 49.621094 L 47.621094 45.378906 L 35.224609 32.982422 C 37.581469 29.938384 39 26.13473 39 22 C 39 12.082241 30.917759 4 21 4 z M 21 8 C 28.756241 8 35 14.243759 35 22 C 35 29.756241 28.756241 36 21 36 C 13.243759 36 7 29.756241 7 22 C 7 14.243759 13.243759 8 21 8 z"></path>
            </svg>
          </div>
          <div className=" ml-3 h-10 w-2/3 rounded-full flex items-center justify-center  bg-red-600">
            <p className="m-0">Sing in</p>
          </div>
        </div>
      </header>
      <article className="w-full h-full mt-20 md:mt-24">
        <section className="w-full h-20 mb-5 p-5  md:flex md:items-center">
          <h1 className="text-red-600 mb-3 transition-all duration-500 md:text-6xl mr-5 ">
            NEWS
          </h1>
          <nav className="mt-2 w-full transition-all  flex overflow-x-scroll">
            {dados.map((item, index) => (
              <button
                key={index}
                className="h-auto md:h-2/5 rounded-full bg-gray-200 mr-4 mb-4 py-2 px-5"
              >
                <p className="text-gray-800">{item}</p>
              </button>
            ))}
          </nav>
        </section>
        <section className="mt-12 p-5">
          <figure>
            <img
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/11/aviao_fab_brasilia.jpeg?w=1220&h=674&crop=1"
              alt="Itamaraty"
              className=" rounded-2xl"
            />
            <figcaption>
              <h3 className=" text-gray-800 font-bold text-lg text-justify">
                Itamaraty busca informações se novos pedidos de repatriação da
                Faixa de Gaza serão possíveis
              </h3>
              <p className=" text-gray-500 font-thin text-sm text-justify">
                Um dia após a chegada dos 32 brasileiros e palestinos ao Brasil,
                o Itamaraty já começa a planejar a tentativa de repatriação de
                um segundo grupo...
              </p>
            </figcaption>
          </figure>
          <section className="mt-10 grid grid-cols-2 gap-6 ">
            {gapi.url.map((url, index) => (
              <figure key={index}>
                <img
                  src={url}
                  alt="gapi.titulo[index]"
                  className=" rounded-2xl  w-full h-26"
                />
                <figcaption>
                  <h3 className=" text-gray-800 font-bold text-lg ">
                    {gapi.titulo[index]}
                  </h3>
                  <p className=" text-gray-500 font-bold text-sm text-justify">
                    {gapi.descricao[index]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </section>
        </section>
        <section className="mt-10 bg-gray-200 w-screen p-5">
          <h1 className=" text-black font-bold text-4xl">Novidades</h1>

          <div className="mt-10 grid grid-cols-2 gap-6 ">
            {gapi.url.map((url, index) => (
              <figure key={index}>
                <img
                  src={url}
                  alt="gapi.titulo[index]"
                  className=" rounded-2xl  w-full h-26"
                />
                <figcaption>
                  <h3 className=" text-gray-800 font-bold text-lg ">
                    {gapi.titulo[index]}
                  </h3>
                  <p className=" text-gray-500 font-bold text-sm text-justify">
                    {gapi.descricao[index]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>{" "}
        <section className="mt-10 bg-white w-screen p-5">
          <h1 className=" text-black font-bold text-4xl">Esportes</h1>

          <div className="mt-10 grid grid-cols-2 gap-6 ">
            {gapi.url.map((url, index) => (
              <figure key={index}>
                <img
                  src={url}
                  alt="gapi.titulo[index]"
                  className=" rounded-2xl  w-full h-26"
                />
                <figcaption>
                  <h3 className=" text-gray-800 font-bold text-lg ">
                    {gapi.titulo[index]}
                  </h3>
                  <p className=" text-gray-500 font-bold text-sm text-justify">
                    {gapi.descricao[index]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>{" "}
        <footer className=" bg-red-600 w-full h-72 flex  flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-5">
            Subscribe to get latest news!
          </h2>
          <input
            type="text"
            placeholder="Email"
            className=" border-2 w-5/6 h-10 rounded-xl border-white bg-transparent px-5"
          />
          <button
            type="button"
            className="mt-3 border-2 w-5/6 h-10 rounded-xl flex items-center justify-center bg-white text-red-500"
          >
            Join!
          </button>
        </footer>
      </article>
    </main>
  );
}
