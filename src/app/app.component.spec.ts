import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'world-of-wordcraft'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('world-of-wordcraft');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('world-of-wordcraft app is running!');
  // });

  // describe('engageApp', () => {
  //   it('will process an array of words that has duplicates', () => {
  //     const inputArray = 'hello mike hello amy';
  //     const expectedWordDisplay = [{
  //       word: 'hello', qty: 2
  //     },
  //     {
  //       word: 'mike', qty: 1
  //     },
  //     {
  //       word: 'amy', qty: 1
  //     }]
  //     const fixture = TestBed.createComponent(AppComponent);
  //     const app = fixture.componentInstance;
  //     app.engageApp
  //     expect(app.wordDisplay).toBe(expectedWordDisplay);
  //   })
  // })
});
