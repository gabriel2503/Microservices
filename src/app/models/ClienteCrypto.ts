import { Crypto } from "./Crypto";

export interface ClienteCrypto {
    id: string;
    crypto: Crypto;
    quantidade: number;
    position: number;
  }