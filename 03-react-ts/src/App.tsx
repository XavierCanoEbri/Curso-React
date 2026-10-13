import Card from './components/Card';
import Saludo from './components/Saludo';
import Titulo from './components/Titulo';
import Footer from './shared/Footer';
import Header from './shared/Header';

export default function App() {
  return(
    <>
    <Header />
    <Titulo />
    <p>Este es el primer componente reutilizable</p>
    <Saludo nombre="Xavi" />
    <Card titulo="Primero" contenido="Este es el contenido del primer componente" />
    <Card titulo="Segundo" contenido="Este es el contenido del segundo componente" />
    <Card titulo="Tercero" contenido="Este es el contenido del tercer componente" />
    <Footer />
  </>
);
}