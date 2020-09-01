import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Adib Gonçalves</h1>
        <h2>@adibgoncalves</h2>

        <p>
          Developer at <a href="https://portal.ifrn.edu.br/campus/parnamirim">@IFRNPar</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Parnamirim, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de outubro de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;