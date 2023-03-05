import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() text:string
  originalValue: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
    this.originalValue = this.el.nativeElement.innerHTML
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red')
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseenter(event) {
    console.log(this.backgroundColor)
    this.backgroundColor = 'red'
    this.el.nativeElement.innerHTML = this.text
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white'
    this.el.nativeElement.innerHTML = this.originalValue
  }
}
