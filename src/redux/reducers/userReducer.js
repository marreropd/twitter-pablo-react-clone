function userReducer(state = null, action) {
  switch (action.type) {
    case "LOG_IN":
      return action.payload;

    case "LOG_OUT":
      return null;
    // Remover del array de tareas la tarea del action.payload.
    // Retornar el nuevo estado.
    default:
      return state;
  }
}

export default userReducer;
