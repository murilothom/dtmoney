import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>14/08/2022</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/08/2022</td>
          </tr>
          <tr>
            <td>Aluguel do Apartamento</td>
            <td className="withdraw">- R$ 512,00</td>
            <td>Casa</td>
            <td>08/08/2022</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$ 3.200,00</td>
            <td>Venda</td>
            <td>29/07/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
