import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'

function App() {

  const name = 'Adriano'
    
  const url ="https://i.pinimg.com/474x/ec/7d/b1/ec7db1dabe3bd4d430e1ccc0077ad6f7.jpg"

  return (
    <div>
      <h1 className="titulo">Olá React!</h1>
      <p>Meu primeiro App</p>
      <p>Olá, meu nome é {name}, e aqui está um monte de coisas aleatórias que fiz utilizando o React</p>
      <p>Soma de 2 + 2 =  {2 + 2}</p>
      <p>Divisão de 10 por 2 = {10 / 2}</p>
      <p>Multiplicação de 30 por 300 = {30 * 300}</p>
      <p>Subtração de 50 por 23 = {50 - 23}</p>
      <caption>Uma imagem aleatória, com o texto + ou - centralizado</caption> 
      <img src={url} alt="minha imagem"/>
      <HelloWorld />
      <p className="subtítulo">Utilizando Props, e reutilizando componentes</p>
      <SayMyName nome="Adriano" />
      <SayMyName nome="Gabriel" />
      <SayMyName nome="Jorge" />
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://petepop.ig.com.br/wp-content/uploads/2021/06/reprodução-instagram-1280x720.jpg"/>
    </div>
  );
}



export default App; 
