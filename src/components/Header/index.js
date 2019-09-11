import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubAlt } from 'react-icons/fa';
import Title from '../Title';

import { PageHeader } from './styles';

const Header = ({ title }) => (
  <PageHeader>
    <FaGithubAlt color="#000" size={40} />
    <Title>{title}</Title>
  </PageHeader>
);

Header.defaultProps = {
  title: 'Repositories'
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
