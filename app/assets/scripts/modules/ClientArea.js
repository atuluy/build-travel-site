class ClientArea {
  constructor() {
    this.injectHTML();
  }
  injectHTML() {
    document.body.insertAdjacentHTML("beforeend", "");
  }
}

export default ClientArea;
