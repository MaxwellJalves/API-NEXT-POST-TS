import { useEffect, useState } from "react";

import api from "../router/obterDados";

export interface IPost {
  id: string;
  titulo: string;
  descricao: string;
}

const Ok = () => {
  const [publicacoes, setPublicacoes] = useState<IPost[]>([]);
  useEffect(() => {
    api().then((item: IPost[]) => setPublicacoes(item));
  }, []);

  return (
    <div>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >{`Next  SSG -> SSR -> ISR = Hibrido`}</h2>
      {publicacoes.map((item) => (
        <ul key={item.id}>
          <h2>{item.titulo}</h2>
          <p>{item.descricao}</p>
        </ul>
      ))}
      {publicacoes.map((post) => {
        <ul key={post.id}>
          <h2>{post.titulo}</h2>
          <p>{post.descricao}</p>
        </ul>;
      })}
      <p></p>
    </div>
  );
};

export default Ok;
