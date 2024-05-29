type Props = {
	costoEnvio: string
}

const estilos = {
	gratis: {
		color: "green"
	},
	pago: {
		color: "orange"
	}
}

export default function Envio(props: Props) {
  const estilo = props.costoEnvio == "G" ? estilos.gratis : estilos.pago
  
    return (
      <small className="text-body-primary" style={estilo} id="algo">
        {props.costoEnvio == "G" ? <><img src="/img/camion.png" alt="" />Envio gratis a todo el país</> : <>Costo de envío interior Argentina $ {props.costoEnvio}</>}
      </small>
    );
  
}
