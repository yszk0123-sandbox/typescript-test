import 'lodash'
import "reflect-metadata";

const Reflect: any = (global as any).Reflect;
const decorate = () => {
  return (object: Object, propertyName: string) => {};
};

class Foo {
  @decorate() name: string;

  constructor(name: string) {
    this.name = name;
  }

  @decorate()
  print() {
    console.log("foo");
  }
}

console.log(Reflect.getMetadata("design:type", Foo.prototype, "name"));
console.log(Object.keys(Foo.prototype))
Object.keys(Foo.prototype).forEach((name: string) => {
  console.log(`${name}:`, Reflect.getMetadata("design:type", Foo.prototype, name));
});
