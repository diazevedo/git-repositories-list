import React, { Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false
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
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { newRepo } = this.state;

    if (newRepo.length === 0) return;

    this.setState({ loading: true });
    try {
      const response = await api.get(`/repos/${newRepo}`);

      this.updateRepositories(response.data.full_name);
      this.setState({ newRepo: '', loading: false });
    } catch (error) {
      console.log(error);
    }

    this.setState({ newRepo: '', loading: false });
  };

  updateRepositories(repo) {
    const { repositories } = this.state;
    repositories.push(repo);
    const repositoriesUniques = Array.from(new Set(repositories));

    this.setState({
      repositories: repositoriesUniques
    });
  }

  render() {
    const { newRepo, loading, repositories } = this.state;

    return (
      <Container>
        <Header />
        <Form onSubmit={this.handleSubmit}>
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
              <a href="https://github.com/diazevedo/git-repositories-list/tree/master">
                Details
              </a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
