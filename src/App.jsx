import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*export default function App(){
  return(
    <>
      <div>
        <h1>Minha esposa é linda demais</h1>
        <MyName name="Marcos"/>
        <MyCurso curso="Sistema de informação"/>
      </div>
      <div>
        <Quadrado lado={2} />
        <Quadrado lado={5} />
      </div>

      <div>
          <Tarefas title="Ir para igreja" feito={false}/>
      </div>
    </>
  )
}*/

function MyName(props) {
  return <>Olá, {props.name}</>;
}

function MyCurso(props) {
  return <>Olá, {props.curso}</>;
}

function Quadrado(props){
  const lado = props.lado;
  const area = lado * lado;

  return <h1>Um Quadrado de lado {lado} tem área {area}</h1>;
}

function Tarefa(props) {

  const {title, feito} = props;
  /*const title =  props.title;
  const feito = props.feito;*/

  return(
    <div style={{color: feito ? "green":"red"}}>
      {feito ? <p>[X] {title}</p> : <p>[  ] {title}</p>}
    </div>
  )
}


export default function App() {
  const tarefas = [
    {id: 1, title: "Ir para igreja", feito: true},
    {id: 2, title: "Estudar React", feito: false},
    {id: 3, title: "Ler um capítulo de Provérbios", feito: false}
  ]
  return(
    <>
      <div>
        <h1>Minhas Tarefas</h1>
        {tarefas.map((tarefa) => (
          <Tarefa key={tarefa.id} title={tarefa.title} feito={tarefa.feito} />
        ))}
      </div>
    </>
  )
}
