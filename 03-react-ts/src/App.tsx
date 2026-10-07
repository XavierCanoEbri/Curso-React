import Card from './components/Card';
import Saludo from './components/Saludo';
import Titulo from './components/Titulo';

export default function App() {
  return(
    <>
    <Titulo />
    <p>Este es el primer componente reutilizable</p>
    <Saludo nombre="Xavi" />
    <Card titulo="Primero" contenido="Este es el contenido del primer componente" />
    <Card titulo="Segundo" contenido="Este es el contenido del segundo componente" />
    <Card titulo="Tercero" contenido="Este es el contenido del tercer componente" />
  </>
);
}