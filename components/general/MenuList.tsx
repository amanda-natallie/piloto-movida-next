
import Link from "next/link";
import React from "react";

interface Iprops {
  internal?: boolean;
}

const MenuList = ({ internal }: Iprops) => {
  return (
    <ul>
      {internal && (
        <li>
          <Link passHref href="/portal">
            <span>
            <img src="/images/icons/home.svg" alt="car alert" />
              Voltar ao inicio
            </span>
          </Link>
        </li>
      )}
      <li>
        <Link passHref href="/portal/reportar-roubo-ou-acidente">
          <span>
            <img src="/images/icons/carAlert.svg" alt="car alert" />
            Reportar Roubo ou Acidente
          </span>
        </Link>
      </li>
      <li>
        <Link passHref href="/portal/documentos">
          <span>
            <img src="/images/icons/document.svg" alt="document" />
            Consultar seus documentos
          </span>
        </Link>
      </li>
      <li>
        <Link passHref href="/portal/contratos">
          <span>
            <img src="/images/icons/contrato.svg" alt="contrato" />
            Ver contrato atual
          </span>
        </Link>
      </li>
      <li>
        <Link passHref href="/portal/reportar-roubo-ou-acidente">
          <span>
            <img
              src="/images/icons/motoristaAdicional.svg"
              alt="motorista adicional"
            />
            Cadastrar Motorista adicional
          </span>
        </Link>
      </li>
      <li>
        <Link passHref href="/portal/reportar-roubo-ou-acidente">
          <span>
            <img src="/images/icons/gamificacao.svg" alt="gamificação" />
            Saber mais sobre Gamificação
          </span>
        </Link>
      </li>
      <li>
        <Link passHref href="/portal/reportar-roubo-ou-acidente">
          <span>
            <img src="/images/icons/ajudaOnline.svg" alt="ajudaOnline" />
            Obter ajuda online
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
