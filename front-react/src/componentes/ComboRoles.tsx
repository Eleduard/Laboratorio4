import { Roles } from "../entidades/Roles";

type Props = {
  roles: Roles;
  filtro: Function;
};

export const ComboRoles = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => props.filtro(e.target.value)
  return (
    <>
      <select className="form-select" aria-label="Default select example" onChange={handleChange}>
        <option value={Roles.ADMIN}>{Roles.ADMIN}</option>
        <option value={Roles.OPERADOR}>{Roles.OPERADOR}</option>
        <option value={Roles.VISOR}>{Roles.VISOR}</option>
      </select>
    </>
  );
};
