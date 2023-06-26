import '../../styles/User/EditUserData.css'


const EditUserData = ({ name, passw ,address, email, phone, setName, setAddress, setEmail, setPhone, handleSubmit, handleCancel }) => {
    return (
      <form className='Edit-profile-column' onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {/* <label>
          Contraseña:
          <input
            type="password"
            value={passw}
            onChange={(e) => setName(e.target.value)}
          />
        </label> */}
        <label>
          Direccion:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          telefono:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button className='Edit-profile-button-actualizar' type="submit">Actualizar</button>
        <button className='Edit-profile-button-cancelar' type="button" onClick={handleCancel}>Cancelar</button>
      </form>
    );
  };

export default EditUserData;