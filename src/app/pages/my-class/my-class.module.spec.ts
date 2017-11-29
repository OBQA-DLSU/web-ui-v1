import { MyClassModule } from './my-class.module';

describe('MyClassModule', () => {
  let myClassModule: MyClassModule;

  beforeEach(() => {
    myClassModule = new MyClassModule();
  });

  it('should create an instance', () => {
    expect(myClassModule).toBeTruthy();
  });
});
