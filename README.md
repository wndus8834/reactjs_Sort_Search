# reactjs_Sort_Search

### 리스트로 출력된 객체들을 정렬, 검색합니다.

![ezgif-2-7a23b6dcab4a](https://user-images.githubusercontent.com/38427658/53079857-b2768d80-353a-11e9-852e-d61c92489ba1.gif)

1) 정렬 순서
* App.js
    ```js
    onInputChange(event) {
    let target = event.target;
    let name = target.name;
    let value = (target.type === "checkbox" || target.type === "radio"
    ? target.checked : target.value);
    this.setState({ [name]: value });
  }
    ```
    * select 태그의 선택 항목을 변경하면, onInputChange 메소드가 즉시 호출된다.
    * onInputChange 메소드에서, orderBy 상태 멤버 변수 값이 변경된다.
    ```js
    if (this.state.orderBy === 'name') this.sortByName();
    else if (this.state.orderBy === 'age') this.sortByAge();
    else this.sortById();
    ```
    * 상태 변수 값이 변경되면, render 메소드가 즉시 호출된다.
    * orderBy 상태 멤버 변수 값에 따라, persons 멤버 변수 배열이 정렬된다.

2) 검색
* App.js
    ```js
    let tags = this.persons
                    .filter( person => person.name.indexOf(this.state.srchByName) == 0 )
                    .map( person => this.renderPerson(person) );
    ```
    * persions 멤버 변수 배열에 대해서 먼저 filter 메소드가 호출된다.
    * filter 메소드는, 배열의 항목 각각에 대해서, 콜백함수를 호출하고,
    콜백함수가 true를 리턴하는 항목들만 모아서 새 배열을 만들고, 이 배열을 리턴한다.
    리턴된 배열에 대해서 map 함수가 호출된다.
    * 즉 filter 콜백 함수가 true를 리턴하는 항목들만 화면에 출력된다.
