import React, { useContext, useState } from 'react'
import '../../Styles/shop.css'
import AdminContext from '../../context/AdminContext.context'
import { GrEdit, GrLineChart } from "react-icons/gr";
import { MdCurrencyRupee } from 'react-icons/md'

const Item = () => {

  const { selected, setModeName, setModePrice, setModeAdvancedPrice, pubishProduct} = useContext(AdminContext);

  const [index, setIndex] = useState(0);

  const setSlideShow = () => {
    if (selected && selected.ShowCaseImages.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const setSlideShowMinus = () => {
    if (selected && index === 0) {
      setIndex(selected.ShowCaseImages.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      {/* <section className="shop-main">
        <div className="left-shop">
          <div className="shop-left-full-view">
            <img src={selected.ShowCaseImages[index]} alt="" className="shop-image-full" />
          </div>
          <div className="shop-left-view-">
            <div className="shop-showcase">
              <span className="show-more-text">Look at product</span>
              <span className="next-prev">
                <span className="n-prev" onClick={setSlideShowMinus}>{"<"}</span>
                <span className="n-prev" onClick={setSlideShow}>{">"}</span>
              </span>
            </div>
            <div className="shop-slide-overflow">
              {selected.ShowCaseImages.map((img, idx) => (
                <img key={idx} className="slide-selection" onClick={() => setIndex(idx)} src={img} alt={`Slide ${idx}`} />
              ))}
            </div>
          </div>
        </div> */}
      {/* 
        <div className="right-shop">

          <div className="shop-left-top">
            <div className="shop-left-top-top">
              <p className="shop-title">{selected.ProductName}</p>
            </div>
          </div>
          <div className="shop-left-two">
            <div className="price-">
              <span className="price-symbol"><MdCurrencyRupee size={25} /></span>
              <span className="price-money">{selected.PriceForCustomers}</span>
            </div>
          </div>
          <div className="shop-left-three">
            <div className="description-three">
              <p className="descrition-size">{selected.Explaination}</p>
            </div>
          </div>
          <div className="shop-left-bottom">
            <button className="button-shop-dark" >Buy Now</button>
            <button className="button-shop-lite" >Add to Cart</button>
          </div>
        </div> */}
      {/* </section> */}
      <section className="Order">
        <div className="order-order">
          <div className="left-shop">
            <div className="shop-left-full-view">
              <img src={selected.ShowCaseImages[index]} alt="" className="shop-image-full" />
            </div>
            <div className="shop-left-view-">
              <div className="shop-showcase">
                <span className="show-more-text">Look at product</span>
                <span className="next-prev">
                  <span className="n-prev" onClick={setSlideShowMinus}>{"<"}</span>
                  <span className="n-prev" onClick={setSlideShow}>{">"}</span>
                </span>
              </div>
              <div className="shop-slide-overflow">
                {selected.ShowCaseImages.map((img, idx) => (
                  <img key={idx} className="slide-selection" onClick={() => setIndex(idx)} src={img} alt={`Slide ${idx}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="type-tag">
            <p className="type-para">Payments</p>
          </div>
          <div className="Order-section">
            <div className="order-single-">
              <p className="one-0n-one">Tatal Ammount : {selected.PriceForCustomers} </p>
              <GrEdit style={{ cursor: 'pointer' }} onClick={() => setModePrice(true)} />
            </div>
            <div className="order-single-">
              <p className="one-0n-one">Advanced Payment Ammount : {selected.AdvancedPaymentAmmount}</p>
              <GrEdit style={{ cursor: 'pointer' }} onClick={() => setModeAdvancedPrice(true)} />
            </div>
          </div>
          <div className="type-tag">
            <p className="type-para">Product Details</p>
          </div>
          <div className="Order-section">
            <div className="order-single-">
              <p className="one-0n-one">Product Name : {selected.ProductName}</p>
              <GrEdit style={{ cursor: 'pointer' }} onClick={() => setModeName(true)} />
            </div>
            <div className="order-three-">
              <div className="sm-3">
                <p className="one-0n-one">Premium</p>
                <input className="input-block" type="text" placeholder={'true / false'} value={selected.Premium} readOnly={true} />
              </div>
              <div className="sm-3">
                <p className="one-0n-one">Tag</p>
                <input className="input-block" type="text" placeholder='Budget' value={selected.Tag} readOnly={true} />
              </div>
              <div className="sm-3">
                <p className="one-0n-one">Indoor / Outdoor</p>
                <input className="input-block" type="text" placeholder='BOTH' value={selected.IndoorOutdoor} readOnly={true} />
              </div>
            </div>
            <div className="order-three-">
              <div className="sm-3">
                <p className="one-0n-one">Camera Quality</p>
                <input className="input-block" type="text" placeholder='IP' value={selected.CameraQuality} readOnly={true} />
              </div>
              <div className="sm-3">
                <p className="one-0n-one">Camera Type</p>
                <input className="input-block" type="text" placeholder='DOME' value={selected.CameraType} readOnly={true} />
              </div>
              <div className="sm-3">
                <p className="one-0n-one">Hard Disk Size</p>
                <input className="input-block" type="text" placeholder={
                  selected.Hdd > 100 ? `${selected.Hdd} GB` : `${selected.Hdd} TB`
                } readOnly={true} />
              </div>
            </div>
            <div className="order-three-">
              <div className="sm-3">
                <p className="one-0n-one">Number of cameras</p>
                <input className="input-block" type="text" placeholder='5' value={selected.NumberOfCameras} readOnly={true} />
              </div>
              <div className="sm-3">
                <p className="one-0n-one">Channel</p>
                <input className="input-block" type="text" placeholder='8' value={selected.Channel} readOnly={true} />
              </div>
              <div className="sm-3">
                <p className="one-0n-one">Meag Pixels</p>
                <input className="input-block" type="text" placeholder='2mp' value={`${selected.MegaPixels} MP`} readOnly={true} />
              </div>
            </div>
            <div className="order-single-" style={{ display: 'block' }}>
              <p className="one-0n-one" >Description </p>
              <p className="one-0n-one">{selected.Description}</p>
            </div>
            <div className="order-about">
              {
                selected && selected.AboutItem.map((lien, index) => (
                  <li className="about-li">{lien}</li>
                ))
              }


            </div>
          </div>
          <div className="Order-section Bottom">
            <button className="order-aproval" onClick={()=>pubishProduct(selected._id)}>Approve</button>
            <button className="order-aproval">Go Back </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Item