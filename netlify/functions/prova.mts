// Ensaio F1: TypeScript, lib/ fora da pasta, JSON importado e uma dependência npm (ms), num pacote só.
import { saudar } from "../lib/saudacao.mts";
import dados from "../../dados/versao.json";
import ms from "ms";

export default async (_req: Request): Promise<Response> =>
  Response.json({ msg: saudar("ensaio"), versao: dados.versao, duasHorasEmMs: ms("2h") });
