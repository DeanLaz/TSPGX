export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
        <div>
        <h1>UserForm</h1>
        <input placeholder="User"/>
        <button>Search</button>
        </div>
        `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}