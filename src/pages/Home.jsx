import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import instance from "../axios";
import { t } from "i18next";
import { useTranslation } from 'react-i18next'


const Home = () => {
  const [minValue, setMinValue] = useState(0);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    instance.get('mahsulotlar').then(res => setProducts(res.data));
  }, []);

  const userDetails = id => {
    navigate(`info/${id}`)
  }


  const { t, i18n } = useTranslation();



  


  return (
    <>
      <div className="home">
        <img className='home-image' src="https://thumb.tildacdn.com/tild3066-3936-4632-a234-396433303631/-/format/webp/4.png" alt="" />
        <img className='home-image' src="https://thumb.tildacdn.com/tild6566-3934-4561-b235-343237663134/-/format/webp/55.png" alt="" />
      </div>
      <div className="home-text">
        <div className="home-p">{t('biz')}</div>
      </div>

      <div style={{ display: "flex",  gap: "100px" }}    className="kotta">

        <div className="check">
          <div>
            <h6>{t('hammasi')}</h6>
            <ul style={{ listStyle: "none" }}>
              <li>{t('soat')}</li>
              <li>{t('akk')}</li>
              <li>{t('uy')}</li>
            </ul>
          </div>
          <div>
            <h6>{t('narx')}</h6>
            <div style={{ width: "100px", textAlign: "center" }}>
              <div style={{ alignItems: "center", display: "flex", width: "250px" }}>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={minValue}
                  onChange={(e) => setMinValue(e.target.value)}
                  style={{ marginRight: "10px", flex: 1 }}
                />

              </div>
            </div>
          </div>
          <div className="number">
            <input type="number" />
            <h1>-</h1>
            <input type="number" />
          </div>
          <div>
            <h6>Brend</h6>
            <ul style={{ listStyle: "none" }}>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />{t('soft')}</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />{t('taxta')}</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />{t('mus')}</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} /> {t('yen')}</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />{t('qu')}</li>
              <li> <input type="checkbox" style={{ marginRight: "10px" }} />{t('kichik')}</li>
            </ul>
          </div>
          <div>
            <h6>{t('bor')}</h6>
            <h6><input type="checkbox" />{t('mahsulotlar')}</h6>
          </div>

        </div>
        <div className="all" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            products.map(value => {
              return (
                <div key={value._id} style={{
                  padding: '20px',
                  margin: '10px',
                  textAlign: 'left',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                  <Link to={`info/${value._id}`}><img style={{ width: "300px" }} className="dr" src={value.img} /></Link>

                  <div style={{ justifyContent: 'space-between', marginTop: '10px', width: '100%' }}>
                    <h3 style={{ fontSize: "15px" }}>
                      <Link
                        to={`info/${value._id}`}
                        style={{ color: 'black', textDecoration: "none  " }}
                      >

                        {value.title}
                      </Link>
                    </h3>
                    <br /><br /><br />
                    <h3 style={{ fontSize: "15px" }}>  ${value.price} </h3>
                    <button onClick={() => userDetails(value._id)} style={{ marginLeft: '230px' }}>Info</button>

                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;
