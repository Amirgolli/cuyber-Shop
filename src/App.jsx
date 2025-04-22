import './index.css';
import './App.css';
import "tailwindcss";

import Products from './components/products';
import ShopNowBTN from './components/btnShopNow';
import Category from './components/cardsCategory';
import Cardproductmb from './components/cardProductMB';
import PreviewCard from './components/PreviewCard';

import Iphone from './images/Iphone Image.png';
import IphoneD from './images/desktop/Iphone Image.png';
import airpod from './images/headphone 14 pro 1.png';
import vision from './images/vision.png';
import ps5 from './images/PS5.png';
import Mack from './images/MacBook Pro 14.png';
import Ps5DK from './images/desktop/PlayStation.png';
import headphone from './images/desktop/headphone.png';
import appleVision from './images/desktop/apple vision.png';
import Mac from './images/desktop/MacBook Pro 14.png';
import Arrow from './images/Arrow`s.png';
import Phones from './images/Phones.png';
import Smart from './images/Smart Watches.png';
import Cameras from './images/Cameras.png';
import Headphones from './images/Headphones.png';
import Computers from './images/Computers.png';
import Gaming from './images/Gaming.png';
import IphoneMB from './images/Iphone 14 pro 1.png';
import Camera from './images/camera 14 pro 1.png';
import Watch from './images/watch 14 pro 1.png';
import WatchPro from './images/watch 14 pro.png';
import Zfold from './images/galaxy.png';
import Buds from './images/buds.png';
import Ipad from './images/Ipad.png';
import IpadPro from './images/IpadPro.png';
import Watchandaipod from './images/watch&aipod.png';
import Gallaxy from './images/Gallaxy.png';
import GoldIphone from './images/GoldIphone.png';
import WhiteIphone from './images/WhiteIphone.png';



function App() {




  const cardCategory = [
    {
      icon: Phones,
      txt: "Phones"
    },
    {
      icon: Smart,
      txt: "Smart Watches"
    },
    {
      icon: Cameras,
      txt: "Cameras"
    },
    {
      icon: Headphones,
      txt: "Headphones"
    }, {
      icon: Computers,
      txt: "Computers"
    }, {
      icon: Gaming,
      txt: "Gaming"
    }
  ];

  const productsMB = [
    {
      image: airpod,
      title: "Apple  AirPods Max",
      info: "Computational audio. Listen, it is powerful",
      id: "airpodMB"
    },
    {
      image: vision,
      title: "Apple Vision Pro",
      info: "An immersive way to experience entertainment",
      id: "visionMB"
    },
    {
      image: ps5,
      title: "Playstation 5",
      info: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
      id: "PS5MB"
    },
    {
      image: Mack,
      title: "Macbook Air",
      info: "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.",
      id: "airpodMB"

    },
  ];



  return (
    <>
      {/* .....................banner........................ */}

      <div className="banner">
        <div className="txt-part-banner">
          <div id="txt-banner">
            <h4>Pro.Beyond.</h4>
            <h2>IPhone 14 <span>Pro</span></h2>
            <p>Created to change everything for the better. For everyone</p></div>
          <ShopNowBTN></ShopNowBTN>
        </div>
        <div className="img-banner">
          <img id='img-bannerMB' src={Iphone} alt="" />
          <img id='img-banneDK' src={IphoneD} alt="" />
        </div>
      </div>
      {/* .....................productsMB........................ */}
      <div className="productaMB">
        {
          productsMB.map((product, index) =>
            <div id={product.id}>
              <Products
                key={index}
                image={product.image}
                title={product.title}
                info={product.info}
              ></Products>
              {
                (product.title === "Macbook Air") && (
                  <button id='btn-productsMB' type="button">
                    Shop now
                  </button>
                )
              }

            </div>
          )
        }
      </div>

      {/* .....................productsDK........................ */}
      <div className="productsDK">
        <div className="leftProduct">
          <div id="ps5">
            <img id='imgPS5' src={Ps5DK} alt="ps5" />
            <div id="txtPS5">
              <h4>Playstation 5</h4>
              <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
          </div>
          <div className="buttonProduct">
            <div id="airpod">
              <img id='imgAirpod' src={headphone} alt="headphone" />
              <div id="txtAirpod">
                <h4>apple AirPods Max</h4>
                <p>Computational audio. Listen, it's powerful</p>
              </div>
            </div>
            <div id="vision">
              <img id='imgVision' src={appleVision} alt="headphone" />
              <div id="txtVision">
                <h4>apple Vision Pro</h4>
                <p>An immersive way to experience entertainment</p>
                <button type="button"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightProduct">
          <div id="txtMac">
            <h4>Macbook Air</h4>
            <p>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <div id="btnMac">Shop Now</div>
          </div>
          <img id='imgMac' src={Mac} alt="" />
        </div>
      </div>
      {/* .....................productsDK........................ */}
      <div className="categories">
        <div className="titleCategory">
          <h4>Browse By Category</h4>
          <img id='Arrow' src={Arrow} alt="" />
        </div>
        <div className="cardsCategory">
          {cardCategory.map((card, index) =>
            <Category key={index} icon={card.icon} txt={card.txt} ></Category>
          )
          }

        </div>
      </div>
      {/* .....................cardBox........................ */}
      <div className="cardBox">
        <div className="categoryCardBox">
          <h5 id='black-txt-category'>New Arrival</h5>
          <h5 id='gray-txt-category'>Bestseller</h5>
          <h5 id='gray-txt-category'>Featured Products</h5>
        </div>
        <div className="cardProduct">
          <Cardproductmb image={IphoneMB} info={'Apple iPhone 14 Pro Max 128GB...'} price={'$900'}></Cardproductmb>
          <Cardproductmb image={Camera} info={'Blackmagic Pocket Cinema Camera...'} price={'$2535'}></Cardproductmb>
          <Cardproductmb image={Watch} info={'Apple Watch Series 9 GPS 41...'} price={'$399'}></Cardproductmb>
          <Cardproductmb image={airpod} info={'AirPods Max Silver...'} price={'$549'}></Cardproductmb>
          <Cardproductmb image={WatchPro} info={'Samsung Galaxy Watch6 Classic...'} price={'$369'}></Cardproductmb>
          <Cardproductmb image={Zfold} info={'Galaxy Z Fold5 Unlocked|256GB...'} price={'$1799'}></Cardproductmb>
          <Cardproductmb image={Buds} info={'Galaxy Buds FE Graphite'} price={'$99.99'}></Cardproductmb>
          <Cardproductmb image={Ipad} info={'Apple iPad 9 10.2" 64GB Wi-Fi Silv...'} price={'$398'}></Cardproductmb>
        </div>
      </div>
      {/* .....................PreviewCard........................ */}
      <div className="Preview">
        <PreviewCard clasNm={'previewcardRemove'} image={Watchandaipod} title={'Popular Products'} Bgcolor={'rgba(255, 255, 255, 1)'}></PreviewCard>
        <PreviewCard clasNm={'previewcard'} image={IpadPro} title={'Ipad Pro'} Bgcolor={'rgba(249, 249, 249, 1)'}></PreviewCard>
        <PreviewCard clasNm={'previewcardRemove'} image={Gallaxy} title={'Samsung Galaxy '} Bgcolor={'rgba(234, 234, 234, 1)'}></PreviewCard>
        <PreviewCard clasNm={'previewcardRemove'} image={Mack} title={'Macbook Pro'} Bgcolor={'rgba(44, 44, 44, 1)'} border={'white'}></PreviewCard>
      </div>
      {/* .....................DiscountsCards........................ */}
      <section className="DiscountsCards">
        <h3 id="titleDiscoun">Discounts up to -50%</h3>
        <div className="cardProduct">
          <Cardproductmb image={GoldIphone} info={'Apple iPhone 14 Pro 512GB Gold...'} price={'$1437'}></Cardproductmb>
          <Cardproductmb image={airpod} info={'AirPods Max Silver...'} price={'$549'}></Cardproductmb>
          <Cardproductmb image={Watch} info={'Apple Watch Series 9 GPS 41...'} price={'$399'}></Cardproductmb>
          <Cardproductmb image={WhiteIphone} info={'Apple iPhone 14 Pro 1TB Gold (MQ2V3)'} price={'$1499'}></Cardproductmb>
        </div>
      </section>
      {/* .....................bigSummerSale........................ */}
      <div className="bigSummerSale">
        <div id="txtBigSummerSale">
          <h3 id={"titleSale"}>Big Summer Sale</h3>
          <p id="pSale">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        </div>
        <ShopNowBTN></ShopNowBTN>
      </div>

    </>
  )
}

export default App
