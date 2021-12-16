import React from 'react';
import './Footer.css';
import LogoDevIcon from '@mui/icons-material/LogoDev';

export default () => {
    return (
        <footer>
          <p className="footer--duv">Duvidas? Ligue<a href="http://"></a></p>
          <p>
            Feito por <span role="img" aria-label="coração"></span><LogoDevIcon /> Leonardo Nogueira<br/>
            Direitos de imagem para Netflix<br/>
            Dados pegos do site themoviedb.org
          </p>
        </footer>
    );
}