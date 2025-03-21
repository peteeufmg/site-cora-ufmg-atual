class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      this.messageContainer = document.querySelector(settings.messageContainer);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.messageContainer.innerHTML = this.settings.success;
      
    }
  
    displayError() {
      this.messageContainer.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission() {
      this.formButton.disabled = true;
      this.formButton.innerText = "Enviando...";
      this.messageContainer.innerText = "";
    }
    clear(){
        this.form.reset();
    }
    async sendForm(event) {
      event.preventDefault();
      const startTime = Date.now();
      try {
        this.onSubmission();
        const response = await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
      const endTime = Date.now();
      console.log(`Form submission took ${endTime - startTime}ms`);
        if (!response.ok)throw new Error('Network response was not ok.');
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        console.error("Erro ao enviar o formulário:", error);
      } finally {
        this.formButton.disabled = false;
        this.formButton.innerText = "Enviar";
        this.form.reset();
      }
    }
  
    init() {
      if (this.form) {
        this.formButton.addEventListener("click", this.sendForm);
      }
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    messageContainer: "[data-message]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();
  
