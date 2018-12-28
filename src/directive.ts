import { ElementRef, Directive, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[ycaRatio]',
  exportAs: 'ycaRatio',
})
export class Ratio implements OnInit {
  @Input() ycaRatio: number;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.refreshLayout();
  }

  refreshLayout() {
    this.ycaRatio = this.ycaRatio || 1;
    this.el.nativeElement.style.width = '100%';
    let width = this.el.nativeElement.getBoundingClientRect().width;
    this.el.nativeElement.style.height = width * this.ycaRatio + 'px';
  }
}
