
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
    width: 100%;
    position: relative;
    background: var(--color-primary);
    padding: 60px 0 0 0;
  }
  
  @media (min-width: 1365px) {
    .hero {
      background-attachment: fixed;
    }
  }
  
  .hero h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .hero p {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    margin-bottom: 30px;
  }
  
  .hero .btn-get-started {
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 14px 40px;
    border-radius: 50px;
    transition: 0.3s;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
    border: 2px solid rgba(255, 255, 255, 0.1);
  }
  
  .hero .btn-get-started:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  .hero .btn-watch-video {
    font-size: 16px;
    transition: 0.5s;
    margin-left: 25px;
    color: #fff;
    font-weight: 600;
  }
  
  .hero .btn-watch-video i {
    color: rgba(255, 255, 255, 0.5);
    font-size: 32px;
    transition: 0.3s;
    line-height: 0;
    margin-right: 8px;
  }
  
  .hero .btn-watch-video:hover i {
    color: #fff;
  }
  
  @media (max-width: 640px) {
    .hero h2 {
      font-size: 36px;
    }
  
    .hero .btn-get-started,
    .hero .btn-watch-video {
      font-size: 14px;
    }
  }
  
  .hero .icon-boxes {
    padding-bottom: 60px;
  }
  
  @media (min-width: 1200px) {
    .hero .icon-boxes:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: calc(50% + 20px);
      background-color: #fff;
    }
  }
  
  .hero .icon-box {
    padding: 60px 30px;
    position: relative;
    overflow: hidden;
    background: #008d7d;
    box-shadow: 0 0 29px 0 rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
    z-index: 1;
    height: 100%;
    width: 100%;
    text-align: center;
  }
  
  .hero .icon-box .title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 24px;
  }
  
  .hero .icon-box .title a {
    color: #fff;
    transition: 0.3s;
  }
  
  .hero .icon-box .icon {
    margin-bottom: 20px;
    padding-top: 10px;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    font-size: 48px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.6);
  }
  
  .hero .icon-box:hover {
    background: hsl(173, 100%, 30%);
  }
  
  .hero .icon-box:hover .title a,
  .hero .icon-box:hover .icon {
    color: #fff;
  }