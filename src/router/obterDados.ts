export interface IPost {
  id: string;
  titulo: string;
  descricao: string;
}

async function obterDados(): Promise<IPost[]> {
  const dados: IPost[] = await fetch("http://localhost:4000/post")
    .then((data) => data.json())
    .catch((error) => error);

  return dados;
}

export default obterDados;
