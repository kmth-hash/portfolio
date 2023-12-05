
function Footer() {

    const scrollToTopFn =()=>{
        window.scrollTo({
            top : 100,
            left :100,
            behavior : "smooth"
        })
    }

  return (
    <footer className="border-top">
      <div className="col-12 pt-5 pb-2 mb-2 d-flex justify-content-between text-black">
        <p></p>
        <p>Designed By kmth-hash | Portfolio@v1.0.0</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="2rem"
          height="2rem"
          className=""
          onClick={scrollToTopFn}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
