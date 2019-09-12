import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Title from '../../components/Title';
import api from '../../services/api';
import { Loading, Owner, IssueList, IssueItem, IssuesState } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    issuesFilter: [
      { label: 'all', active: true },
      { label: 'open', active: false },
      { label: 'closed', active: false }
    ],
    filterIndex: 0
  };

  async componentDidMount() {
    const { match } = this.props;
    const repositoryName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repositoryName}`),
      api.get(`/repos/${repositoryName}/issues`, {
        params: {
          state: 'all',
          per_page: 5
        }
      })
    ]);

    this.setState({
      repository: repository.data,
      loading: false,
      issues: issues.data
    });
  }

  // handleFilterButtonClick = async filterIndex {}
  handleFilterButtonClick = async index => {
    this.setState({ filterIndex: index });

    const { issuesFilter, repository } = this.state;

    const resp = await api.get(
      `/repos/${repository.owner.login}/${repository.name}/issues`,
      {
        params: {
          state: issuesFilter[index].label,
          per_page: 5
        }
      }
    );

    this.setState({ issues: resp.data });
  };

  render() {
    const {
      repository,
      issues,
      issuesFilter,
      filterIndex,
      loading
    } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Return to home page</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <Title>{repository.name}</Title>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <IssuesState selected={filterIndex}>
            {issuesFilter.map((issue, index) => (
              <button
                type="button"
                onClick={() => this.handleFilterButtonClick(index)}
                key={issue.label}
              >
                {issue.label}
              </button>
            ))}
          </IssuesState>
          {issues.map(issue => (
            <IssueItem key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt="issue.user.login" />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>

                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{`@${issue.user.login}`}</p>
              </div>
            </IssueItem>
          ))}
        </IssueList>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string
    })
  }).isRequired
};
