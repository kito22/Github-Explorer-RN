import React, {Component} from 'react';
import PropTypes from 'prop-types';
import api from '../../config/services/axios';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  AvatarOwner,
  Author,
  Info,
  Title,
  Loading,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    page: 1,
    isRefresing: false,
    loading: true,
  };

  componentDidMount() {
    this.load();
  }

  load = async (page = 1) => {
    const {navigation} = this.props;
    const user = navigation.getParam('user');
    const {stars} = this.state;

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {page},
    });

    this.setState({
      stars: page >= 2 ? [...stars, ...response.data] : response.data,
      page,
      isRefresing: false,
      loading: false,
    });
  };

  loadMore = () => {
    const {page} = this.state;
    const nextPage = page + 1;
    this.load(nextPage);
  };

  refreshList = async () => {
    this.setState({isRefresing: true, stars: []}, this.load);
  };

  handleNavigate = repository => {
    const {navigation} = this.props;
    navigation.navigate('Repository', {repository});
  };

  render() {
    const {stars, isRefresing, loading} = this.state;
    const {navigation} = this.props;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <Stars
            data={stars}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            onRefresh={this.refreshList}
            refreshing={isRefresing}
            keyExtractor={star => String(star.id)}
            renderItem={({item}) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <AvatarOwner source={{uri: item.owner.avatar_url}} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
