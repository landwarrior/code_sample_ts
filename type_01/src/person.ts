export class Person {
  constructor(
    private id: number,
    private personName: string,
    private personAddress: string
  ) {}

  public write(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerHTML +=
        "<div>" +
        "ID: " +
        this.id +
        "  名前: " +
        this.personName +
        "  住所: " +
        this.personAddress;
    }
  }
}
