import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Aniversario from '../../components/terminalAniversario/terminalNiver';
import '../../css/global.css';
import '../../css/button.css';
import './niver.css';

export default function Niver(){
  const navigate = useNavigate();

  return(
    <div className='page-container'>
      <Header/>

      <div className='terminal borda-animada'>
        <Aniversario/>
      </div>

      <div className='container-btn-niver'>
        <button className="btn-voltar-niver" onClick={() => navigate('/home')}>// CORE &gt; MAIN</button>
      </div>
      <Footer/>
    </div>
  );
}