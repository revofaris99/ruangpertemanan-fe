import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "../../css/homeAboutPage.css";
import NavRuangPertemanan from "../../components/navbar/ruangpertemanan";
import Footer from "../../components/footer";
import { images, icons } from "../../constants";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/scrollToTop";

export default function AboutPage() {
  /* scroll back top */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <div name="" className="w-full h-screen">
        <ScrollToTop />
        {/* navbar */}
        <NavRuangPertemanan />
        {/* body */}
        <div id="container-about" className="container-about">
          {/* <!-- section tentang kami --> */}
          <section className="about-card layout-padding2">
            <div>
              <h1 className="h1"> Tentang kami</h1>
            </div>
            <div className="about_img-box">
              <img src={images.Logo} alt="fix_logo" />
              <p>
                Cerita tentang kehidupan, perjalanan langkah kaki terdengar jauh
                lebih indah untuk terdengar kata 'pulang'. Dari kita memulai
                langkah dipagi hari bersanding penuh mimpi yang akan kita
                wujudkan, dengan penuh rasa keberanian untuk melangkah penuh
                tantangan. Tidak tersadar sampai hal itu benar-benar kamu
                lakukan, aku hanya ingin sedikit bercerita tentang arti sebuah
                perjalanan.
              </p>
            </div>
          </section>
          {/* <!-- end section tentang kami --> */}

          {/* section anggota ruang pertemanan */}
          {/*container intro ruang pertemanan */}
          <section className="container px-4 lg:px-8 mx-auto max-w-screen-xl">
            <div className="max-w-screen text-gray-700">
              {/* intro rp */}
              <div className="max-w-xl mx-auto text-center">
                <h1 className="font-bold text-2xl my-3">
                  All-In-One{" "}
                  <span className="text-yellow-500">Ruang Pertemanan</span>
                </h1>
                <p className="leading-relaxed text-gray-500 text-xl italic font-semibold dark:text-gray-500">
                  "Akan tiba saatnya nanti, air matamu akan jatuh bukan karena
                  masalah,tetapi karena doamu telah Allah kabulkan" (KH. Maimoen
                  Zubair)
                </p>
              </div>
              {/* intro end */}
              {/* card */}
              <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-10">
                <div className="bg-white shadow-xl hover:shadow-blue-200 p-6 text-center rounded-xl">
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      className="block mx-auto h-32 w-32 rounded-full sm:mx-0 sm:shrink-0"
                      src={images.AniqFto}
                      alt="#"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          Muhammad Aniq Wafa`
                        </p>
                        <p className="text-slate-500 font-medium">
                          Fullstack Developer
                        </p>
                      </div>
                      <div className="px-4 py-1 text-sm text-center text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Poftofolio
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-xl hover:shadow-blue-200 p-6 text-center rounded-xl">
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      className="block mx-auto h-32 w-32 rounded-full sm:mx-0 sm:shrink-0"
                      src={images.RevFto}
                      alt="#"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          Revo Faris Saifuddin
                        </p>
                        <p className="text-slate-500 font-medium">
                          Fullstack Developer
                        </p>
                      </div>
                      <div className="px-4 py-1 text-sm text-center text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        <Link to={"/ruang/v1/portofolio"}>Poftofolio</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-xl hover:shadow-blue-200 p-6 text-center rounded-xl">
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      className="block mx-auto h-32 w-32 rounded-full sm:mx-0 sm:shrink-0"
                      src={images.HifzulFto}
                      alt="#"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          Hifdzul Malik
                        </p>
                        <p className="text-slate-500 font-medium">Guru</p>
                      </div>
                      <div className="px-4 py-1 text-sm text-center text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Poftofolio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end section anggota ruang pertemanan */}

          <section className="mt-10">
            <div className="flex flex-col items-center w-1/3 mx-auto">
              <div
                className="relative h-0 overflow-hidden max-w-full w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  width="600"
                  height="315"
                  src="https://www.youtube.com/embed/hCcWByXRENk?si=edkVcFAwAjwVJU4r&amp;clip=UgkxHHEBEwu-OkcgwjBEfmpeC3eH-k4lskuQ&amp;clipt=EAAYleIC"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                ></iframe>
              </div>
            </div>
          </section>

          {/* <!-- section timeline ruang pertemanan --> */}
          <section className="text-center text-2xl p-4 mt-10">
            <h1 className="font-bold">Timeline Ruang Pertemanan</h1>
            <section id="timeline" className="timeline-container">
              <div className="timeline-block">
                <div className="timeline-img timeline-picture"></div>
                <div className="timeline-content">
                  <h2>Mahasiswa Baru</h2>
                  <p>
                    {" "}
                    Berawal dari seorang yang bukan siapa-siapa yang kuliah
                    untuk membahagiakan orang, walaupun bukan tujuan awal
                  </p>
                  <span className="timeline-date"> 2016 </span>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-img timeline-picture"></div>
                <div className="timeline-content">
                  <h2>Kontrakan Ubur-Ubur</h2>
                  <p>
                    Berawal dari kenalan terus menjadi teman dan memutuskan
                    untuk mengontrak sebuah rumah. Hedon diawal bulan
                    pertengahan sampai akhir bulan hampir setiap hari makan
                    dengan menu yang sama
                  </p>
                  <span className="timeline-date"> 2017 </span>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-img timeline-picture"></div>
                <div className="timeline-content">
                  <h2>Kost</h2>
                  <p>
                    Akhirnya tinggal dua orang yang kost barengan depan masjid
                    pas
                  </p>
                  <span className="timeline-date"> 2018 </span>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-img timeline-picture"></div>
                <div className="timeline-content">
                  <h2>Magang</h2>
                  <p>
                    Pada tahun 2019 kita magang beda tempat, dan gue selalu
                    ribet dengan kopi sampai pagi
                  </p>
                  <span className="timeline-date"> 2019 </span>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-img timeline-picture"></div>
                <div className="timeline-content">
                  <h2>Korona</h2>
                  <p>Bnayak hal yang terjadi pada tahun ini dan 2021</p>
                  <span className="timeline-date"> 2020 </span>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-img timeline-picture"></div>
                <div className="timeline-content">
                  <h2>Lulus Kuliah</h2>
                  <p>
                    Masih ini sendiri dan mencari arah tujuan dan harapan
                    kembali sampai batas waktu yang tidak ditentukan
                  </p>
                  <span className="timeline-date"> 2021 </span>
                </div>
              </div>
            </section>
          </section>
          {/* <!-- end section profiles ruang pertemanan --> */}
        </div>
        <div className="container px-2 lg:px-8 mx-auto max-w-screen-2xl">
          <div onClick={scrollToTop} className="flex flex-row-reverse">
            <icons.AiOutlineArrowUp
              size={40}
              className="bg-blue-500 rounded-3xl animate-bounce cursor-pointer shadow-2xl"
            />
          </div>
        </div>
        <Footer />
      </div>
      {/* footer */}
    </Fragment>
  );
}
