import React, { useState } from "react";
import Head from "next/head";
import { Container } from "../../components/Container";
import { DashboardPaperBoxed } from "../../components/DashboardPaperBoxed";
import styles from "../../assets/css/pages/accident.module.scss";
import Sidebar from "../../components/template/Sidebar";
import { Button, Grid, TextField } from "@material-ui/core";
import BackButton from "../../components/general/BackButton";
import BeatLoader from "react-spinners/BeatLoader";
import { getFile } from "../../utils/helper";
import Link from "next/link"

const AccidentReport = () => {
  const initialBo: any = {
    file: undefined,
    fileName: undefined,
  };
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    reason: "",
    bo: initialBo,
  });
  const [errorFile, setErrorFile] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleResumeFile = async (file: any) => {
    if (file !== null) {
      const permittedTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
        "image/jpeg",
        "image/png",
      ];

      if (file.size > 10000000) {
        setErrorFile(true);
      } else if (!permittedTypes.includes(file.type)) {
        setErrorFile(true);
      } else {
        setErrorFile(false);
        setLoading(true);

        try {
          const boletim = await getFile(file);

          const boletimData = {
            file: boletim,
            fileName: file.name,
          };

          setData({
            ...data,
            bo: boletimData,
          });
          setErrorFile(false);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    } else {
      setData({
        ...data,
        bo: initialBo,
      });
    }
  };
  const handleReason = (reason: string): void => {
    setData({
      ...data,
      reason,
    });
    setStep(3);
  };
  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Roubo ou Acidente</h2>
            <img src="/images/icons/sinistro.svg" alt="sinistro" />
            <p>
              Dentro de 5 dias úteis, o notificante receberá uma carta e um
              e-mail da Seguradora, ambos com o número do sinistro, assim como
              uma relação de documentos relacionados a ocorrência, que, para
              fins de análise e indenização, deverão ser preenchidos e enviados
              pelo sistema para fins de validação. Ressalta-se que, uma vez
              recebidos todos os documentos pela Seguradora, haverá o prazo de
              30 dias corridos para análise e, caso os mesmos estejam de acordo
              com as condições da apólice, este prazo poderá ser reduzido para
              até 8 dias úteis.
            </p>
            <Button
              variant="outlined"
              color="primary"
              onClick={(): void => setStep(2)}
              className={styles.cta}
            >
              Continuar
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <BackButton clickAction={() => setStep(1)} />
            <h2>Selecione a causa</h2>
            <ul>
              <li onClick={() => handleReason("Colisão")}>
                <img src="/images/icons/colisao.svg" alt="colisão" />
                <p>Colisão</p>
              </li>
              <li onClick={() => handleReason("Roubo ou Furto")}>
                <img src="/images/icons/roubo.svg" alt="roubo" />
                <p>Roubo ou Furto</p>
              </li>
              <li onClick={() => handleReason("Falhas Mecanicas")}>
                <img src="/images/icons/desastres.svg" alt="desastres" />
                <p>Falhas Mecanicas</p>
              </li>
              <li onClick={() => handleReason("Outros")}>
                <img src="/images/icons/pessoa.svg" alt="pessoa" />
                <p>Outros</p>
              </li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <BackButton clickAction={() => setStep(2)} />
            <h2>Preencha os dados</h2>
            <br />
            <br />
            <Grid container spacing={3} justify="center">
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  type="date"
                  label="Data da Ocorrência"
                  onChange={(e: any) => console.log("email", e.target.value)}
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  type="time"
                  label="Hora da Ocorrência"
                  onChange={(e: any) => console.log("email", e.target.value)}
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={9}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={(): void => setStep(4)}
                  className={styles.cta}
                >
                  Continuar
                </Button>
              </Grid>
            </Grid>
          </>
        );
      case 4:
        return (
          <>
            <BackButton clickAction={() => setStep(3)} />
            <h2>Envie uma cópia do Boletim de Ocorrência</h2>
            <br />
            <br />
            <div className={styles.wrap}>
              <label className={styles.formFilePicker} htmlFor="upload_button">
                {loading ? (
                  <BeatLoader color="gray" />
                ) : (
                  <span>
                    Adicione um arquivo de no máximo 2MB: .doc, .docx, .pdf,
                    .jpg, .png
                  </span>
                )}

                <input
                  type="file"
                  id="upload_button"
                  accept=".doc,.docx,.pdf,.jpg,.png"
                  value=""
                  onChange={(e: any) => handleResumeFile(e.target.files[0])}
                />
              </label>
              {data.bo.fileName && (
                <div className={styles.infoFile}>
                  <span>
                    {data.bo.fileName
                      ? data.bo.fileName
                      : "Boletim de Ocorrência"}
                  </span>

                  <span
                    className={styles.navigation}
                    onClick={() => handleResumeFile(null)}
                  >
                    Deletar arquivo
                  </span>
                </div>
              )}
            </div>
            <Button
              variant="outlined"
              color="primary"
              onClick={(): void => setStep(5)}
              className={styles.cta}
            >
              Continuar
            </Button>
          </>
        );
      case 5:
        return (
          <>
            <BackButton clickAction={() => setStep(4)} />
            <h2>Solicitação criada com sucesso</h2>
            <br />
            <svg
              width="108"
              height="106"
              viewBox="0 0 108 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M79.47 42.091L47.655 73.3168L28.575 54.5901L34.92 48.3627L47.655 60.8618L73.125 35.8635L79.47 42.091ZM18 53.0002C18 42.7093 22.59 33.4785 29.79 27.0302L40.5 37.5418V11.0418H13.5L23.4 20.7585C14.58 28.7968 9 40.236 9 53.0002C9 75.9227 26.775 94.7377 49.5 96.946V88.0243C31.77 85.8602 18 70.976 18 53.0002ZM99 53.0002C99 30.0777 81.225 11.2627 58.5 9.05432V17.976C76.23 20.1402 90 35.0243 90 53.0002C90 63.291 85.41 72.5218 78.21 78.9701L67.5 68.4585V94.9585H94.5L84.6 85.2418C93.42 77.2035 99 65.7643 99 53.0002Z"
                fill="#EE7201"
              />
            </svg>
            <Grid container justify="center">
              <Grid item xs={6}>
                <p>
                  Em breve entraremos novamente em contato para lhe informar
                  sobre o andamento de sua solicitação. Fique atento às suas
                  notificações!
                </p>
                <Link passHref href="/portal">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(): void => setStep(5)}
                    className={styles.cta}
                  >
                    Voltar para a página inicial
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </>
        );
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>Portal do Motorista - Movida Piloto</title>
      </Head>
      <Container source="dashboard">
        <DashboardPaperBoxed
          breadcrumb={["Portal", "Reportar roubo ou acidente"]}
          bg="/images/bg/1.jpg"
          title="Roubo ou Acidente"
          subtitle="Se você foi vitima de algum sinistro, preencha as informações a seguir e inicie uma análise. É rápido, fácil e 100% online!"
        >
          <Sidebar />
          <Grid item md={8}>
            <div className={styles.steps}>{renderSteps()}</div>
          </Grid>
        </DashboardPaperBoxed>
      </Container>
    </>
  );
};

export default AccidentReport;
