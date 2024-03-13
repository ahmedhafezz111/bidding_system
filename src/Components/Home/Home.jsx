import React, { useEffect, useState } from 'react'
import Style from "./Home.module.css"
// import Img from "./img/Antiques.jpg"

export default function Home() {

  return(
    <>
    <section className={`home ${Style.c1}`}>
      <div className="container">
        <div className="row p-5 ">
        <div className="col-lg-6">
          <h1 className={Style.mainTitle}>Souq Diana For Special Antiques</h1>
        </div>
        <div className={`col-lg-6 ${Style.w45}`}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae natus facilis reiciendis hic sint unde doloremque iusto. Recusandae quibusdam animi necessitatibus tenetur sunt magnam distinctio iste quae, impedit minus!</p>
          <button className={`btn ${Style.btnS}`}>Read More</button>
        </div>
      </div>
      </div>
    </section>

    <section className={`home1 py-5 ${Style.c1}`}>
      <div className="container">
        <div className="row">
          <img className={Style.backGimg} src={require("./img/greenroom-9f954b54-565h.webp")} alt="" />


          </div>
        </div>

    </section>

    <section className={`home2 py-5 ${Style.c2}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <img className={`${Style.w80} ${Style.bradius}`} src={require("./img/auction.jpg")} alt="" />
          </div>
          <div className={ `col-lg-4 ${Style.mtop140}  ${Style.lineHeight2} `}>
          <h2>About Auctions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam error dolore et corrupti. Molestiae nesciunt inventore consectetur ipsum expedita ipsam unde minima incidunt libero exercitationem, a earum veritatis vel.</p>
          <button className={`btn ${Style.btnS}`}>Read More</button>
          </div>
         

        </div>
      </div>

    </section>

    <section className={`home3 py-5  ${Style.c3}`}>
    <div className="container">
        <div className="row d-flex justify-content-between ">
          
          <div className={ `col-lg-4 ${Style.mtop180} ${Style.lineHeight2}`}>
          <h2>About Auctions</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam error dolore et corrupti. Molestiae nesciunt inventore consectetur ipsum expedita ipsam unde minima incidunt libero exercitationem, a earum veritatis vel.</p>
          <button className={`btn ${Style.btnS}`}>Read More</button>
          </div>
         <div className="col-lg-6 align-items-end ">
          <img className={`${Style.w80} ${Style.bradius}`} src={require("./img/auctions2.jpg")} alt="" />
          </div>

        </div>
      </div>

    </section>
    <section className={`home4 py-5  d-flex justify-content-center align-items-center ${Style.c4} `}>
      <div className="container">
        <div className="row  justify-content-center  ">
          <div className="col-lg-6  m-auto text-center ">
            <img className={`${Style.bradius50} ${Style.w45}`} src={require("./img/hammer.jpg")} alt="" />
            <h1 className={`${Style.subTitle} py-3`}>Start Bidding</h1>
            <p className={`${Style.text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, fugit numquam? Nulla adipisci, nisi quia delectus maiores consectetur, illum mollitia natus incidunt dolor aliquam, nam culpa hic asperiores ea architecto.</p>
          <button className={`btn ${Style.btnS}`}>Read More</button>

          </div>
          
        </div>
      </div>

    </section>

 
    </>
  )

}
