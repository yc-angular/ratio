import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, SimpleChange } from '@angular/core';

import { RatioModule, Ratio } from '../src/';

@Component({
  selector: 'my-test-component',
  template: ''
})
export class TestComponent { }

describe('Test directive', () => {
  let fixture: ComponentFixture<Component>;
  let comp: Component;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        RatioModule.forRoot()
      ]
    });

    fixture = TestBed.overrideComponent(TestComponent, {
      set: {
        template: '<div [ycaRatio]="1"></div>'
      }
    }).createComponent(TestComponent);
    comp = fixture.componentInstance;
  });

  it('Should display flex', () => {
    const directiveEl = fixture.debugElement.query(By.directive(Ratio));
    expect(directiveEl).not.toBeNull();

    const directiveInstance = directiveEl.injector.get(Ratio);
    directiveInstance.ngOnInit();
    expect(directiveInstance['el'].nativeElement.style.display).toBe('flex');
  });

  it('Should have changed', fakeAsync(() => {
    const directiveEl = fixture.debugElement.query(By.directive(Ratio));
    const directiveInstance = directiveEl.injector.get(Ratio);
    directiveInstance['el'].nativeElement.getBoundingClientRect = () => {
      return {
        width: 100
      }
    }
    directiveInstance.ngOnInit();
    expect(directiveInstance['el'].nativeElement.style.height).toBe('100px');
  }));
});
