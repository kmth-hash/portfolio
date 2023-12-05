import Header from "./Header";
import CertCard from "./CertCard";
import  {certList} from '../staticDataFile.jsx';
import Footer from "./Footer";
import "../stylesheets/certifications.css";


function Certifications() {
  return (
    <div className="cert-main">
      <Header />
      <br />
      <div className="container">
        <div className="row p-1">
          {certList.map((cert,index)=>{
            return(
              
              <CertCard cert={cert} key={index}/>
            )
          })}
          
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Certifications;
