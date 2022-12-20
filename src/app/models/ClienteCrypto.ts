import { Crypto } from "./Crypto";

export interface ClienteCrypto {
  id: string;
  nome: string;
  criptos: Crypto[]
  }