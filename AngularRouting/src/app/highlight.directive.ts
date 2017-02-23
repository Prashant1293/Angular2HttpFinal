import {Directive, ElementRef, Input, HostListener} from '@angular/core'

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective{
  @Input() bgColor: string;
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') kugkuj() {
    this.highlight();
  }

  private highlight() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }

}
