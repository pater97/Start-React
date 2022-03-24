import React from 'react'

const Componente = () => {
  return (
    <section>
        <Persona/>
        <Saluto/>
    </section>
  )
}

const Persona = () => {
    return <h2>Sono tizio</h2>
};

const Saluto = () => {
    return <h2>Ciao molto piacere</h2>
  }


export default Componente