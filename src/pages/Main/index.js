import React, { Component, Fragment } from 'react';
import moment from 'moment';
import api from '../../services/api';
import { Container, Form } from './styles';
import GlobalStyle from '../../styles/global';
import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  componentDidMount() {
    const repositories = JSON.parse(localStorage.getItem('@Gitcompare:repositories'));

    if (repositories) {
      this.setState({ repositories });
    }
  }

  componentDidUpdate() {
    const { repositories } = this.state;

    localStorage.setItem('@Gitcompare:repositories', JSON.stringify(repositories));
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { repositoryInput, repositories } = this.state;

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading,
    } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <img src={logo} alt="Github Compare" />

          <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
            <input
              type="text"
              placeholder="usuário/repositório"
              value={repositoryInput}
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
            </button>
          </Form>

          <CompareList repositories={repositories} />
        </Container>
      </Fragment>
    );
  }
}
