import React from 'react';
import './style.css';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sub: [this.props.specializedSubjects] };
  }

  render() {
    return (
      <section className='program'>
        <p className='program__title'>{this.props.title}</p>
        <div className='program__wrapper'>
          <div className='program__module1'>
            <label className='program__module1--number' for={this.props._id}>
              1 модуль
            </label>
            <input
              class='visually-hidden filter-input filter-input-checkbox'
              type='checkbox'
              name='module'
              id={this.props._id}
            />
            <ul className='program__module1--list'>
              {this.state.sub[0].slice(0, 5).map((item, index) => (
                <li key={index} className='program__module1--discipline'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className='program__module1'>
            <label
              className='program__module1--number'
              for={this.props._id + 1}
            >
              2 модуль
            </label>
            <input
              class='visually-hidden filter-input filter-input-checkbox'
              type='checkbox'
              name='module'
              id={this.props._id + 1}
            />
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
