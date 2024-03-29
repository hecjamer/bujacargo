import React, {useContext, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/componentCarousel.scss';
import { DataContext } from '../DataContext';


function ComponentCarousel() {

  const { configuracion } = useContext( DataContext );

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
        <div className="ComponentCarousel">
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
              {configuracion.carousel.diapositivas.map(detalle => {
                return (
                  <Carousel.Item key={detalle.id}>
                    {/* <img className="d-block w-100" src={require(`../images/${detalle.imagen}`)} alt={detalle.alt}/> */}
                    {/* <img className="d-block w-100" src={(`https://benjumeacarlos981.github.io/multicarga/img/${detalle.imagen}`)} alt={detalle.alt}/> */}
                    <img className="d-block w-100" src={(`${configuracion.img.linkImg}${detalle.imagen}`)} alt={detalle.alt}/>

                    <Carousel.Caption>
                      <h3>{detalle.descripcion}</h3>
                    </Carousel.Caption>
                    <div className="overlay">
                      <div className="container">
                        <div className="row">
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 textCarouselRight">
                            <h1>{configuracion.carousel.tituloPrincipalH1}</h1>
                            <p>{configuracion.carousel.tituloPrincipalP}</p>
                            <a href="https://hecjamer.github.io/multicargajym/" className="btn btn-outline-light">{configuracion.carousel.tituloPrincipalA}</a>
                            <button type="button" className="btn">{configuracion.carousel.tituloPrincipalBTN}</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                )
              })}
            </Carousel>
        </div>
  );
}

export default ComponentCarousel;