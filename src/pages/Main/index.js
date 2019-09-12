import React, { Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Container from '../../components/Container';
import api from '../../services/api';

import { Form, SubmitButton, List } from './styles';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    const repos = localStorage.getItem('repositories');
    if (repos) this.setState({ repositories: JSON.parse(repos) });
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories)
      localStorage.setItem('repositories', JSON.stringify(repositories));
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo.length === 0)
        throw new Error('Você precisa indicar um repositório');

      const hasRepository = repositories.find(repo => repo === newRepo);
      if (hasRepository) throw new Error('Duplicated repository.');

      const response = await api.get(`/repos/${newRepo}`);

      this.setState({
        repositories: [...repositories, response.data.full_name],
        newRepo: ''
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: 'true' });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { newRepo, loading, repositories, error } = this.state;

    return (
      <Container>
        <Header />
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Add a repository"
            onChange={this.handleInputChange}
            value={newRepo}
          />
          <SubmitButton loading={loading ? 'loading' : undefined}>
            {loading ? (
              <FaSpinner color="#FFF" size={22} />
            ) : (
              <FaPlus color="#FFF" size={22} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(r => (
            <li key={r}>
              <span>{r}</span>
              <Link to={`/repository/${encodeURIComponent(r)}`}>Details</Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
