import { Calc } from "./calc";

describe("Calc", () => {
  it("Должен возвращать экземпляр класса Calc в методах add/sub", () => {
    const calc = new Calc();
    expect(calc.add(5)).toBeInstanceOf(Calc);
    expect(calc.sub(3)).toBeInstanceOf(Calc);
  });

  it("Должен корректно реализовывать математически операции", () => {
    const calc = new Calc();
    expect(calc.add(5).result()).toBe(5);
    expect(calc.add(3).sub(10).result()).toBe(-7);
  });

  it("Должен реализовывать цепочку вызовов", () => {
    const calc = new Calc();
    expect(calc.add(1).sub(2).add(3).result()).toBe(2);
    expect(calc.add(4).sub(5).add(6).sub(7).result()).toBe(-2);
  });

  it("Должен обеспечить иммутабельность экземпляров класса", () => {
    const calc = new Calc(10);
    const calc2 = calc.add(5);
    expect(calc.result()).toBe(10);
    expect(calc2.result()).toBe(15);
  });

  it("Должен обеспечить иммутабельность экземпляров класса 2", () => {
    const calc = new Calc(10);
    const calc2 = calc.add(5);
    const calc3 = calc2.sub(4);
    expect(calc.result()).toBe(10);
    expect(calc2.result()).toBe(15);
    expect(calc3.result()).toBe(11);
  });
});
