import Button from "./evento/Button";

function Evento() {
  function meuEvento() {
    console.log(`Ativando primeiro evento`);
  }

  function segundoEvento() {
    console.log(`Ativando segundo evento`);
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="primeiro evento" />
      <Button event={segundoEvento} text="segundo evento evento" />
    </div>
  );
}

export default Evento;
