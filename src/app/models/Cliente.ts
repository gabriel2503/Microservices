import { Crypto } from "./Crypto";

export interface Cliente {
    id: string;
    nome: string;
    cryptos: Crypto[]
  }