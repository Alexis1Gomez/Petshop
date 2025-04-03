const listaCliente = async () => {
    return fetch('http://localhost:3000/profle')
    .then(resposta => {
      if(resposta.ok) {
          return resposta.json()
      }
      throw new Error('Não foi possivel listar os clientes')
    })
};

const criaCliente = async (nome, email) => {
  const clientes = await listaCliente();

  const ultimoId =
    clientes.length > 0
      ? Math.max(...clientes.map((cliente) => Number(cliente.id)))
      : 0;
  const novoId = ultimoId + 1;

  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      id: novoId,
    }),
  }).then((resposta) => {
    if( resposta.ok) {
        return resposta.json();
    }
    throw new Error('Não foi possivel criar um cliente')
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  }).then(resposta => {
    if(!resposta.ok) {
        throw new Error('Não foi possivel remover um clientes')

    }
  })
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
  .then(resposta => {
    if(resposta.ok) {
        return resposta.json();

    }
    throw new Error('Não foi possivel detalhar um clientes')
  })
}

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
        return resposta.json();
    }
    throw new Error('Não foi possivel atualizar os clientes')
  });
};

export const clienteService = {
  listaCliente,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
