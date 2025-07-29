import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import TerminalClima from '../../components/relatorioClima/fraseClima';
import TerminalRelatorio from '../../components/relatorioClima/relatorioClima';
import Data from '../../components/relatorioClima/data';
import '../../css/global.css';
import '../../css/button.css';
import './clima.css';

export default function Clima(){
  const navigate = useNavigate();

  return (
		<div className='page-container'>
			<Header />

			<div className='main-content-clima'>
				<div className='titulo-terminal'>
					<p class='p-titulo-terminal'>
						// [ RELATÓRIO.EXE ] // Clima ∆ Coração
					</p>
				</div>

				<div className='bloco-terminal'>
					<div className='data-container'>
						<Data />
					</div>

					<div>
						<TerminalClima />
					</div>
				</div>

				<div className='btn-clima-container'>
					<button
						className='btn-voltar-clima'
						onClick={() => navigate("/home")}>
						// CORE &gt; MAIN
					</button>
				</div>
			</div>

			<Footer />
		</div>
	);
}