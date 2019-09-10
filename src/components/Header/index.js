import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubAlt } from 'react-icons/fa';

import { PageHeader } from './styles';

const Header = ({ title }) => (
  <PageHeader>
    <FaGithubAlt color="#000" size={40} />
    <h1>{title}</h1>
  </PageHeader>
);

Header.defaultProps = {
  title: 'Repositories'
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
