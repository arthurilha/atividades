export function saudacao(){
  let data = new Date().toLocaleDateString()
  return `Olá, seja muito bem-vindo. Hoje é ${data}`
}

export function getCep(cep){
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(Response => Response.json())

}