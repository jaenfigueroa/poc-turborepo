import { Button, Header,Box, sumar } from "ui";

export default function Page() {
  const deuda = sumar(125, 563)

  return (
    <>
      <Header text="Web" />
      <Button />
      <Box text='Recuadro morado' color='violet' />
      <p>La deuda es de ${deuda}</p>
    </>
  );
}
