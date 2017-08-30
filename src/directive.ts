import { ElementRef, Directive, Input } from '@angular/core';

@Directive({
  selector: '[ycaRatio]'
})
export class Ratio {
  @Input() ycaRatio: number;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.ycaRatio = this.ycaRatio || 1;
    this.el.nativeElement.style.width = '100%';
    let width = this.el.nativeElement.getBoundingClientRect().width;
    this.el.nativeElement.style.height = width * this.ycaRatio + 'px';
  }
}