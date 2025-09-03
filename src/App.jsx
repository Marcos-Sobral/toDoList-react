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

  const {title, feito, responsavel} = props;
  /*const title =  props.title;
  const feito = props.feito;*/

  return(
    <div style={{
      margin: "8px 0",
      padding: "6px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      backgroundColor: "white"
    }}>
      <p>{title}</p>
      <small>Responsável: {responsavel}</small>
    </div>
  )
}

function Coluna({titulo, tarefas}){
  return(
    <div style={{
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      color: 'black'
    }}>
      <h2>{titulo}</h2>
      {tarefas.map(tarefa => (
        <Tarefa
          key={tarefa.id}
          title={tarefa.title}
          responsavel={tarefa.responsavel}
        />
      ))}
    </div>
  )
}


export default function App() {
  const tarefas = [
    {id: 1, title: "Ir para igreja", status: "a fazer", feito: true, responsavel: "Marcos"},
    {id: 2, title: "Estudar React", status: "andamento", feito: false, responsavel: "Débora"},
    {id: 3, title: "Ler um capítulo de Provérbios", status:"concluido", feito: false, responsavel: "Guilherme"}
  ]
  return(
    <div style={{ display: "flex", gap: "20px" }}>
    {/* Coluna A fazer */}
    <Coluna titulo="A Fazer" tarefas={tarefas.filter(t => t.status === "a_fazer")} />

    {/* Coluna Em andamento */}
    <Coluna titulo="Em Andamento" tarefas={tarefas.filter(t => t.status === "em_andamento")} />

    {/* Coluna Concluído */}
    <Coluna titulo="Concluído" tarefas={tarefas.filter(t => t.status === "concluido")} />
  </div>
  )
}
