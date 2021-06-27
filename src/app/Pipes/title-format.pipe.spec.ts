import { TitleFormatPipe } from './title-format.pipe';

describe('TitleFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new TitleFormatPipe();
    pipe.transform('Hemand',12);
    pipe.transform('Hemand Rajan Ajitha',6);
    expect(pipe).toBeTruthy();
  });
});
