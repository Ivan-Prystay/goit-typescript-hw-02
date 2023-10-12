/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const newPage = new Page({ title: "This is new page" });
newPage.pageInfo();

export {};
