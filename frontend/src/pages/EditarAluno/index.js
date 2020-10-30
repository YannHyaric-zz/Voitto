import React, { useState } from 'react';

// components
import { Button, Modal, Header, Icon, Form } from 'semantic-ui-react';
//services
import api from '../../services/api';

// styles
import { Container, InitialText } from './styles';

const EditarAluno = (data_aluno) => {
  const [modalInfos, setModalInfos] = useState(false);
  const [currentInfo, setCurrentInfo] = useState(data_aluno);


  async function handleModification(data) {
    try {
      const { id } = data;
      const response = await api.put(`/alunos/${id}`);
      console.log(response);
    } catch (e) {
      alert('Erro no update: ' + e);
    }

    return (
      <Modal open={modalInfos} onClose={() => setModalInfos(false)} closeIcon>
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
  }
};
export default EditarAluno;
