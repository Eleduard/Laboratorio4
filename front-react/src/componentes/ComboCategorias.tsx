import { Categoria } from "../entidades/Categoria";

type Props = {
  cates: Categoria[];
  filtro: Function;
};

export const ComboCategorias = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => props.filtro(e.target.value)
  return (
    <>
      <select className="form-select" aria-label="Default select example" onChange={handleChange}>
        <option value={0}>(Seleccione una categoría)</option>
        {props.cates.map((e) => (
            <option key={e.idCategoria} value={e.idCategoria}>{e.denominacion}</option>
        ))}
      </select>
    </>
  );
};
