const listaCliente = () => {
  return fetch('http://localhost:3000/profile')
  .then(resposta => {
    return resposta.json()
  })
}


const criaCliente = async (nome,email) => {

    const clientes = await listaCliente();

    const ultimoId = clientes.length > 0 
        ? Math.max(...clientes.map(cliente => Number(cliente.id))) 
        : 0;
    const novoId = ultimoId + 1;

    return fetch (`http://localhost:3000/profile`, {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email : email,
            id: novoId
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente  = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
  .then(resposta => {
    return resposta.json()
  })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}




export const clienteService = {
    listaCliente,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

