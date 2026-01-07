class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name); // call parent constructor
    this.role = role;
  }

  accessPanel() {
    return "Admin panel accessed";
  }
}


const admin = new Admin("Neelesh", "Admin");
admin.greet();        // inherited
admin.accessPanel();  // own method
