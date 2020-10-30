import React, { useState } from 'react';

// components
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

//services
import api from '../../services/api';

// styles
import { Container, InitialText } from './styles';

const AdicionaCurso = () => {
  const history = useHistory();

  async function handleAdd(e) {
    e.preventDefault();

  }

  return (
    <Container>
      <Button href="/admin" secondary>
        Voltar
      </Button>
      <InitialText>Cadastro</InitialText>

      
    </Container>
  );
};

export default AdicionaCurso;
