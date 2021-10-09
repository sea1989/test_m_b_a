import React from 'react';
import './style.css';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sub: [this.props.specializedSubjects] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      (prevState) => ({ isToggleOn: !prevState.isToggleOn }),
      () => {
        this.props.onChange(this.props.name);
      }
    );
  }

  render() {
    return (
      <section className='program'>
        <p className='program__title'>{this.props.title}</p>
        <div className='program__wrapper'>
          <div className='program__module1'>
            <p className='program__module1--number'>1 модуль</p>
            <ul className='program__module1--list'>
              {this.state.sub[0].slice(0, 5).map((item, index) => (
                <li key={index} className='program__module1--discipline'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='program__module1'>
            <p className='program__module1--number'>2 модуль</p>
            <ul className='program__module1--list'>
              {this.state.sub[0].slice(5, 10).map((item, index) => (
                <li key={index} className='program__module1--discipline'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
