import { Caracteristicas } from "./Caracteristicas.model";
import { EstoqueJoia } from "./EstoqueJoia.model";
import { FotosJoia } from "./FotosJoia.model";
import { TipoJoias } from "./TipoJoias.model";

export class Joia {
    id! : number;
    nome! : string;
    descricao! : string;
    preco! : number;
    desconto! : number;
    caminhoImagemPrimaria! : string;
    caminhoImagemSecundaria! : string;
    tipoJoia! : TipoJoias;
    estoques! : EstoqueJoia[];
    fotosJoia! : FotosJoia[];
    caracteristicas! : Caracteristicas[];
}