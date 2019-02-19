import React from 'react';
import './App.css';

class App extends React.Component {
  persons = [
    { id: 1, name:'홍길동', age:18 }, { id: 2, name:'전우치', age:19 },
    { id: 3, name:'임꺽정', age:20 }, { id: 4, name:'이몽룡', age:16 },
    { id: 5, name:'장길산', age:20 }, { id: 6, name:'연흥부', age:30 },
    { id: 7, name:'성춘향', age:16 }, { id: 8, name:'심청', age:15 },
    { id: 9, name:'연놀부', age:32 }, { id: 10, name:'배장화', age:15 },
    { id: 11, name:'배홍련', age:13 }, { id: 12, name:'최콩쥐', age:14 },
    { id: 13, name:'일지매', age:18 }, { id: 14, name:'변강쇠', age:25 }
  ];

  constructor(props) {
    super(props);
    this.state = { orderBy: 'id',  srchByName: '' };
  }

  onInputChange(event) {
    let target = event.target;
    let name = target.name;
    let value = (target.type === "checkbox" || target.type === "radio"
                ? target.checked : target.value);
    this.setState({ [name]: value });
  }

  sortById() {
    this.persons.sort( (p1, p2) => p1.id - p2.id );
  }

  sortByAge() {
    this.persons.sort( (p1, p2) => p1.age - p2.age );
  }

  sortByName() {
    this.persons.sort( (p1, p2) => { 
      if (p1.name < p2.name) return -1;
      else if (p1.name > p2.name) return 1;
      return 0;
    });
  }

  renderPerson(person) {
    return (
      <tr key={ person.id }>
          <td>{ person.id }</td>
          <td>{ person.name }</td>
          <td>{ person.age }</td>
      </tr>
    );
  }

  render() {
    if (this.state.orderBy === 'name') this.sortByName();
    else if (this.state.orderBy === 'age') this.sortByAge();
    else this.sortById();

    let tags = this.persons.filter( person => person.name.indexOf(this.state.srchByName) === 0 )
    .map( person => this.renderPerson(person) );
    return (
      <div>
        <span>정렬순서 </span>
        <select name="orderBy" value={ this.state.orderBy } 
                               onChange={ this.onInputChange.bind(this) }>
          <option value='id'>id</option>
          <option value='name'>이름</option>
          <option value='age'>나이</option>
        </select>
        <input type="text" name="srchByName" value={ this.state.srchByName }
                                             onChange={ this.onInputChange.bind(this) } />

        <table>
            <thead>
                <tr><th>id</th><th>이름</th><th>나이</th></tr>
            </thead>
            <tbody>
              { tags }
            </tbody>
        </table>
      </div>
    );
  }
}
export default App;
