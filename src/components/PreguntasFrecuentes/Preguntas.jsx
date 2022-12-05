import Accordion from 'react-bootstrap/Accordion';
import '../PreguntasFrecuentes/PreguntasStyles.css'

function AllCollapseExample() {
  return (
    <Accordion id='body'>
    <h2>Preguntas Frecuentes</h2>
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>¿Como comprar?</b></Accordion.Header>
        <Accordion.Body>
        Para realizar la compra, solo debes elegir los productos de tu interés, ir a carrito, cliquear en "Ir a pagar", completar el formulario con tus datos, una vez realizado, uno de nuestros vendedores se comunicará con vos para concretar la compra y completar confirmar el pedido.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>¿Puedo solicitar Factura A?</b></Accordion.Header>
        <Accordion.Body>
        Sí, emitimos Factura A y B. Somos agentes de percepción.

        En caso de necesitar Factura «A», deberás enviarnos: Razón Social y CUIT por WhatsApp a tu vendedor asignado, para que se encargue de emitir la factura correspondiente. De lo contrario se emitira Remito de compra».   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>¿Hay stock de todos los productos?</b></Accordion.Header>
        <Accordion.Body>
        Los productos publicados en nuestra web no estan sujetos a un stock determinado, en caso de que alguno de los productos seleccionados no cuenten con stock, el vendedor asignado se pondra en contacto y ofrecerá algún producto similar al solicitado en un principio.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>¿Hay algún monto mínimo de compra?</b></Accordion.Header>
        <Accordion.Body>
        El monto minimo para que la compra sea efectiva es de $7.000 (Siete mil pesos). Caso contrario, la compra será discriminada por la plataforma.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><b>¿Con quién coordino mi compra?</b></Accordion.Header>
        <Accordion.Body>
        Una vez finalizada la compra, su vendedor asignado se contactará con el cliente para coordinar finalizar la venta, facturación y envío de los productos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><b>¿Cuanto demora en llegar mi pedido?</b></Accordion.Header>
        <Accordion.Body>
        La entrega del pedido depende complatamente del correo elegido, para envios en San Miguel de Tucumán (Dentro de las 4 avendias) el envio puede llegar a ser en el día.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><b>En caso de que la entrega de mi compra no se realice. ¿Qué debo hacer?</b></Accordion.Header>
        <Accordion.Body>
        En caso de que la entrega de la compra no sea concretada, el cliente deberá ponerse en contacto con su vendedor asignado y coordinar una nueva visita al domicilio (en este caso, podria tener un costo adicional).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header><b>¿Cuáles son las zonas envío?</b></Accordion.Header>
        <Accordion.Body>
        La zona de abarcamiento de envio comprende toda la República Argentina, para Tucumán el costo de envio puede variar entre $200 y $600 (según la zona), esto podrás coordinarlo con tu vendedor asignado.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default AllCollapseExample;