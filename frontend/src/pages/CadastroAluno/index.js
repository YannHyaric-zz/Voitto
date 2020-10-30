import React, { useState } from 'react';

// components
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

//services
import api from '../../services/api';

// styles
import { Container, InitialText } from './styles';

const CadatroAluno = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCEP] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome,
      email,
      cep,
      cidade,
      estado,
    };

    try {
      const res = await api.post('alunos', data);
      console.log('Aluno ' + res);
      history.push('/admin');
    } catch (err) {
      alert('Erro no cadastro' + err);
    }
  }

  return (
    <Container>
      <Button href="/admin" secondary>
        Voltar
      </Button>
      <InitialText>Cadastro</InitialText>

      <form onSubmit={handleRegister}>
        <TextField
          value={nome}
          onChange={event => {
            setNome(event.target.value);
          }}
          id="nome"
          label="Nome"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
          id="email"
          label="E-mail"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          value={cep}
          id="cep"
          label="CEP"
          onChange={event => {
            setCEP(event.target.value);
          }}
          variant="outlined"
          margin="normal"
          size="10"
          maxlength="9"
          fullWidth
          required
        />

        <TextField
          value={cidade}
          onChange={event => {
            setCidade(event.target.value);
          }}
          id="cidade"
          label="cidade"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={estado}
          onChange={event => {
            setEstado(event.target.value);
          }}
          id="estado"
          label="estado"
          maxLength={2}

          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
};

export default CadatroAluno;
