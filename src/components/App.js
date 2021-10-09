import React from 'react';
import axios from 'axios';

import './reset.css';
import './App.css';
import Program from './program';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [], };
  }

  componentDidMount() {
    axios.get('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses').then((response) => {
      this.setState({
        data:
          response.data.data.slice(0, 5)
      });
    });
  }


  render() {
    return (
      <React.Fragment>
        <header className='header'>Специализированные дисциплины</header>

        <div className='container'>

          {this.state.data.map((item, index) => (

            <Program key={item._id} {...item} />

          ))}
        </div>

        <footer className='footer'>
          <div className='footer__modules'>
            <span className='footer__modules--title'>Практические модули</span>
            <p className='footer__modules--text'>Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
          </div>
          <div className='footer__test'>
            <span className='footer__test--title'>Итоговая аттестация</span>

            <ul className='footer__test--list'>
              <li className='footer__test--item'>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
              <li className='footer__test--item'>Защита итоговой аттестационной работы
              </li>
            </ul>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
