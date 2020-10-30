import React, { useEffect, useState } from 'react';
import EditarAluno from '../EditarAluno'

// components
import {
  Table,
  Button,
  Popup,
  Modal,
  Header,
  Icon,
  Form,
} from 'semantic-ui-react';

//services
import api from '../../services/api';

// styles
import { Container, InitialText } from './styles';

const Dashboard = () => {
  const [alunos, setAlunos] = useState([]);
  const [currentInfo, setCurrentInfo] = useState([]);
  const [modalInfosAluno, setModalInfos] = useState(false);
  const [modalInfosCurso, setModalInfosCurso] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/alunos');
        setAlunos(response.data);
      } catch {
        alert('Confira a api');
      }
    }
    fetchData();
  }, []);

  async function handleModification(data) {
    try {
      const { id } = data;
      const response = await api.put(`/alunos/${id}`);
      console.log(response);
    } catch (e) {
      alert('Erro no update: ' + e);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/alunos/${id}`);
      console.log(response);
    } catch (e) {
      alert('Erro no delete: ' + e);
    }
  }

  const render_modal_info_alunos = () => (
    <Modal
      open={modalInfosAluno}
      onClose={() => setModalInfos(false)}
      closeIcon
    >
      <Header content={`Editando informações de ${currentInfo.nome}`} />
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Nome"
              placeholder="Nome"
              onChange={event => {
                currentInfo.nome = event.target.value;
              }}
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              onChange={event => {
                currentInfo.email = event.target.value;
              }}
            />
            <Form.Input
              fluid
              label="CEP"
              placeholder="CEP"
              onChange={event => {
                currentInfo.cep = event.target.value;
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setModalInfos(false)} color="red">
          <Icon name="remove" /> Cancelar
        </Button>
        <Button color="green">
          <Icon
            name="checkmark"
            onClick={() => handleModification(currentInfo)}
          />{' '}
          Salvar
        </Button>
      </Modal.Actions>
    </Modal>
  );

  function open_info_alunos(data_aluno) {
    console.log(data_aluno);
    EditarAluno(data_aluno);
    setCurrentInfo(data_aluno);
    setModalInfos(true);
  }

  

  function render_actions(data_aluno) {
    return (
      <center>
        <Popup
          trigger={
            <Button icon="edit" onClick={() => open_info_alunos(data_aluno)} />
          }
          content="Editar informações"
          basic
        />
        <Popup
          trigger={<Button icon="plus" positive />}
          content="Adicionar curso para aluno"
          basic
        />
        <Popup
          trigger={
            <Button
              icon="close"
              negative
              onClick={() => handleDelete(data_aluno.id)}
            />
          }
          content="Excluir aluno"
          basic
        />
      </center>
    );
  }

  function render_alunos() {
    return alunos.map(v => (
      <Table.Row>
        <Table.Cell>{v.id}</Table.Cell>
        <Table.Cell>{v.nome}</Table.Cell>
        <Table.Cell>{v.email}</Table.Cell>
        <Table.Cell>{v.cep}</Table.Cell>
        <Table.Cell>{render_actions(v)}</Table.Cell>
      </Table.Row>
    ));
  }

  return (
    <Container>
      <InitialText>Administrador de alunos</InitialText>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID Aluno</Table.HeaderCell>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>CEP</Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {alunos.length > 0 ? (
            render_alunos()
          ) : (
            <h2>Nenhum dado registrado </h2>
          )}
        </Table.Body>
      </Table>
      {render_modal_info_alunos()}
      <Button href="/cadastro" primary>
        Adicionar aluno
      </Button>
      <Button href="/" secondary>
        Ver instruções
      </Button>
    </Container>
  );
};

export default Dashboard;
