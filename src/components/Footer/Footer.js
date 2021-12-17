import React from 'react';
import './Footer.css';
import LogoDevIcon from '@mui/icons-material/LogoDev';

export default () => {
    return (
        <footer>
          <div className="footer--contact">
            <p >Dúvidas? Ligue 0800-761-4631<a href="http://"></a></p>
            <p className="footer--auth">
                Feito por <LogoDevIcon className="footer--icon"/> Leonardo Nogueira<br/>
            </p>
            <p>
                Direitos de imagem para Netflix | Dados pegos do site themoviedb.org
            </p>   
          </div>
          <div>
            
          </div>       
        </footer>
    );
}