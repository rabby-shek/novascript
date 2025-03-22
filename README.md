# Custom Scripting Language Project

# Author: MD Rabby Shek Suvo


# novascript 🚀

A modern upgrade to JavaScript with powerful features, better performance, and improved developer experience.

## 📌 Features

### ✅ **Strong Typing (Optional)**

novascript supports static typing with type inference.

```
let num: int = 10;
let name: string = "Shek Saheb";
let items: array<number> = [1, 2, 3];
```

### ✅ Better Null Handling

No undefined, only null, and explicit nullability.

```
let x: int | null = null;  # ✅ Allowed
let y: int = null;         # ❌ Error

```

### ✅ Strict Comparisons

Only ===, no weak type coercion issues.

```
console.log(0 === false); # ❌ Type Error
```

### ✅ Fixed Floating-Point Precision

Handles floating-point math correctly.

```
let price: decimal = 0.1 + 0.2; # ✅ 0.3, no rounding issue
```

### ✅ Built-in Multithreading

True parallel execution support.

```
parallel function fetchData() {
    let data = await fetch("https://api.example.com");
}

```

### ✅ Result-Based Error Handling

No messy try/catch, use Result type instead.

```
function divide(x: int, y: int): Result<int, string> {
    if (y === 0) return Error("Cannot divide by zero");
    return x / y;
}

let result = divide(10, 0);
if (result.isError) {
    print(result.error);
} else {
    print(result.value);
}

```

### ✅ Native WebAssembly (WASM) Support

Write WASM directly in novascript.

### ✅ await Everywhere

No need for async keyword, await works in any function.

```let data = await fetch("https://api.example.com");

```

### ✅ True Private & Protected Members

```
class User {
    private username: string;
    protected email: string;

    constructor(name: string, email: string) {
        this.username = name;
        this.email = email;
    }

    public getUsername(): string {
        return this.username;
    }
}

let user = new User("ShekSaheb", "shek@example.com");
print(user.username);  # ❌ Error: Private property
```

### ✅ Abstract Classes & Methods

```
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        print("Woof Woof!");  # ✅ Must implement
    }
}

```

### ✅ Operator Overloading

Allow objects to redefine how operators work.

```
class Vector {
    x: int;
    y: int;

    constructor(x: int, y: int) {
        this.x = x;
        this.y = y;
    }

    operator + (other: Vector): Vector {
        return new Vector(this.x + other.x, this.y + other.y);
    }
}

let v1 = new Vector(3, 4);
let v2 = new Vector(1, 2);
let v3 = v1 + v2;  # ✅ Custom + operator
```

### ✅ Interfaces with Default Methods

Improve interfaces with default implementations like Java’s default methods.

```
interface Logger {
    log(message: string) {
        print("Log: " + message);  # ✅ Default Implementation
    }
}
```

### ✅ First-Class Meta-Programming (Reflection)

```
class Car {
    model: string = "Tesla";
}

let car = new Car();
print(car.reflect().properties);  # ✅ ["model"]
```

### ✅ Dependency Injection (Built-in DI)

JavaScript has no built-in dependency injection.

```
class Service {
    getData() {
        return "Service Data";
    }
}

class Controller {
    constructor(private service: Service) {}

    fetchData() {
        return this.service.getData();
    }
}

let controller = new Controller(inject(Service));  # ✅ Built-in DI

```

### ✅ Class-Level Decorators

Simplify decorators (instead of JS's messy function-based decorators).

```
@singleton
class Database {
    connect() {
        print("Connected to DB!");
    }
}
```

### 🔥 6️⃣ Smart Constructors (No More Boilerplate)

In JavaScript, you must manually assign values in the constructor. novascript should auto-generate this!

```
class Person(name: string, age: int) {}  # ✅ No need for manual assignments!

let p = new Person("Shek", 24);
print(p.name);  # ✅ "Shek"
```